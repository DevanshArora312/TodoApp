import { useEffect, useState } from "react";
import { useParams,useNavigate,Link} from "react-router-dom";
import NavBar from "../components/NavBar";
import {BsFillTrashFill} from "react-icons/bs";
import {FaRegEdit} from "react-icons/fa"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FcLikePlaceholder , FcLike} from "react-icons/fc"
import Comments from "../components/comments";
import {motion,useAnimationControls} from "framer-motion";
import likeHandler from "../hooks/useLikeHandler"
import likeMotion from "../utils/likeMotion";
import deleteHandler from "../hooks/useTodoDelete"
import { useDispatch, useSelector } from "react-redux";
import {setOne} from "../redux/slices/todos"
const SingleTodo = () => {
    const {animVar ,animationType} = likeMotion;
    const controls = useAnimationControls();
    const {id} = useParams();
    const navigate  = useNavigate();
    const [deleted,setDeleted] = useState(false); 
    const token = useSelector(state => {return state.auth.token});
    const todo = useSelector(state => state.todos.one_todo);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/get-todo/${id}`,{method:"POST",headers:{"Content-Type" : "application/json"},body:JSON.stringify({token})})
        .then(res => {
            return res.json();
        })
        .then(data => {
            // console.log(data)
            dispatch(setOne(data.data));
        })
        .catch(err=> {
            console.log(err.message);
            navigate("/login");
        })
    },[])


    useEffect(()=>{
        toast.onChange(v => {
            if(v.status === "removed" && v.type === 'success'){
                navigate("/");
            }
        })
        return()=>{
            toast.onChange(undefined)
        }
    },[toast])
    return ( 
        <>
        <NavBar/> 
        <div className="sm:px-[15%] px-[8%] pt-[15vh]">
            {
                todo && !deleted &&
                <div className="flex flex-col gap-y-10">
                    <header className="text-3xl flex justify-between">
                        <div className="flex flex-col gap-y-2">
                            <h1 className=" text-red-500">
                                {todo.title}
                            </h1>
                            <h6 className="text-[20px] pl-4 opacity-70">
                                Written by : {todo.writtenBy}
                            </h6>
                        </div>
                        <div className="flex flex-col text-[30px]  gap-y-5">
                            <div className="flex gap-x-5">
                                <button className="flex items-start"> <BsFillTrashFill className="border-2 border-solid p-[5px] hover:opacity-70" onClick={() => deleteHandler(id,setDeleted)} /> </button>
                                <Link to = {`/update-todo/${id}`}><button> <FaRegEdit className="border-2 border-solid p-[5px] hover:opacity-70" /> </button> </Link>
                            </div>
                            <div className="flex justify-center">
                                <motion.button className="flex items-start text-[30px]" animationType={animationType} variants={animVar} animate = {controls} onClick={() => controls.start('visible')}> 
                                    {!todo.liked && <FcLikePlaceholder className="p-[5px] hover:opacity-70" onClick={ () => likeHandler(todo,token,id,dispatch)} /> }
                                    {todo.liked && <FcLike className="p-[5px] hover:opacity-70" onClick={ () => likeHandler(todo,token,id,dispatch)} /> }
                                </motion.button>
                            </div>
                        </div>
                    </header>
                    <article className="text-md w-full min-h-[300px] mb-10 h-full border-gray-300 border-2 border-solid p-5 rounded-lg bg-gray-100">
                        {todo.body}
                    </article>
                </div>
            }
            { !deleted && todo && <div className="my-5">
                <h1 className=" text-3xl text-red-500 font-semibold my-7">Comments</h1>
                <div className="px-5">
                    <Comments/>
                </div>
            </div>
            }
            
            {
                !todo && <div>Loading....</div>
            }
            {
                deleted && <div> Redirecting... </div>
            }
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                theme="dark"
            />
        </div>
        </>
    );
}
 
export default SingleTodo;