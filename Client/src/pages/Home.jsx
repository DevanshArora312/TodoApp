import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { setTodos } from "../redux/slices/todos";

const Home = () => {
    const todos = useSelector(state => state.todos.todos);
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/get-todo`,{method:"POST",headers:{"Content-Type" : "application/json"},body:JSON.stringify({token})})
        .then(res => {
            return res.json();
        })
        .then(data => {
            if(data.success){
                dispatch(setTodos(data.data));
            } else{
                navigate('/login')
            }
        })
        .catch(err=> {
            console.log("here",err.message);
            navigate('/login');
        })
    },[])
    return ( 
        <div className="w-screen">
        <NavBar/>
        <div className="text-3xl flex flex-col justify-center items-start px-[15%] pt-20 w-full">
            <h1 className="pb-10 font-semibold">All tasks!</h1>
            {
                todos && todos.map( (el,index) => {
                    return (
                        <Link to = {`/todos/${el._id}`} key={index}>
                        <div className={`${el.liked ? 'border-r-red-500 border-solid border-r-8' : ""} w-[60vw] flex flex-col rounded-lg hover:shadow-xl shadow-black gap-4 p-5`} >
                            <h2 className="text-red-500">{el.title}</h2>
                            <h6 className="text-[20px] opacity-80">Written By: {el.writtenBy} </h6>
                        </div>
                        </Link>
                    )
                })
            }
            {!todos && <div className="text-sm opacity-90 ">Loading....</div>}
        </div>
        </div>
    );
}
 
export default Home;