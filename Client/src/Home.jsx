import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
const Home = () => {
    const [todos,setTodos] = useState(null)
    useEffect( ()=> {
        fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/get-todo`)
    .then(res => {
        return res.json();
        // console.log(res.json());
    }).then(data => {
        setTodos(data.data);
        // console.log(data.data);
    })
    .catch(err=> {
        console.log(err);
    })
    },[]);
    return ( 
        <div className="w-screen">
        <NavBar/>
        <div className="text-3xl flex flex-col justify-center items-start px-[15%] pt-20 w-full">
            <h1 className="pb-10 font-semibold">All todos!</h1>
            {
                todos && todos.map( (el,index) => {
                    return (
                        <Link to = {`/todos/${el._id}`} key={index}>
                        <div className="w-[60vw] flex flex-col rounded-lg hover:shadow-xl shadow-black gap-4 p-5" >
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