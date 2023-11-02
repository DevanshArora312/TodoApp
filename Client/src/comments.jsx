import { useEffect, useState } from "react";
import CreateComment from "./createComment";
import {BsFillTrashFill} from "react-icons/bs"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import deleteHandler from "./hooks/useCommentDelete";
import { useParams } from "react-router-dom";

const Comments = () => {
    const [comments,setComments] = useState(null);
    const [changed,setChanged] = useState(false);
    const todoID = useParams().id;
    
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/comments/get`)
        .then( res => {
            return res.json();
        })
        .then( data => {
            const values = [];
            if (data.data){
                data.data.map((elem,index) => {
                    if( elem.todoID === todoID ){
                        values.push(elem);
                    }
                })
            }
            setComments(values);
        })
    },[changed])
    
    return (  
        <div className="w-full h-full">
            <div> 
                <CreateComment setChanged={setChanged} todoID={todoID}/>
            </div>
            {
                comments && 
                comments.map((el,index) => {
                    return(
                        <div className="my-10 pl-2" key={index} id = {el._id}>
                            <h1 className="text-xl font-semibold">{el.user} commented</h1>
                            <div className="flex w-full">
                                <main className="text-sm w-full h-full border-gray-300 border-2 border-solid p-5 rounded-lg bg-gray-100">
                                    {el.comment}
                                </main>
                                <button className="flex items-center"> <BsFillTrashFill className="mx-2 border-2 border-solid p-[5px] hover:opacity-70 h-1/2 w-full" onClick={() => deleteHandler(el._id,setChanged,todoID)} /> </button>
                            </div>
                        </div>
                    )
                })
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
    );
}
 
export default Comments;