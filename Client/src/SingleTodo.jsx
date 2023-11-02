import { useEffect, useState } from "react";
import { useParams,useNavigate,Link} from "react-router-dom";
import NavBar from "./NavBar";
import {BsFillTrashFill} from "react-icons/bs";
import {FaRegEdit} from "react-icons/fa"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FcLikePlaceholder , FcLike} from "react-icons/fc"
import Comments from "./comments";
import {motion,useAnimationControls} from "framer-motion";
import likeHandler from "./hooks/useLikeHandler"
import likeMotion from "./utils/likeMotion";
import deleteHandler from "./hooks/useTodoDelete"

const SingleTodo = () => {
    const {animVar ,animationType} = likeMotion;
    const controls = useAnimationControls();
    const {id} = useParams();
    const navigate  = useNavigate();
    const [todo,setTodo] = useState(null); 
    const [deleted,setDeleted] = useState(false); 
    
    useEffect(() => {
        fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/get-todo/${id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            // console.log(data)
            setTodo(data.data);
        })
    },[])
    
    toast.onChange(v => {
        if(v.status === "removed" && v.type === 'success' && v.data !== "child"){
            navigate("/");
        }
    })
    return ( 
        <>
        <NavBar/> 
        <div className="px-[15%] pt-[15vh]">
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
                                    {!todo.liked && <FcLikePlaceholder className="p-[5px] hover:opacity-70" onClick={ () => likeHandler(todo,setTodo,id)} /> }
                                    {todo.liked && <FcLike className="p-[5px] hover:opacity-70" onClick={ () => likeHandler(todo,setTodo,id)} /> }
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