import { useState } from "react";
import {BsFillInfoCircleFill} from "react-icons/bs"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCommentCreate from "./hooks/useCommentCreate";

const CreateComment = ({setChanged,todoID}) => {
    const [formData,setFormData] = useState({
        user :"",
        comment:""
    })
    const changeHandler = (e) => {
        setFormData( prev => {
            return {
                ...prev,
                [e.target.name] : e.target.value
            }
        })
    }
    const submitHandler = e => {
        e.preventDefault();
        useCommentCreate(formData,setFormData,setChanged,todoID);
    }

    return (  
        <div className="flex w-full h-full pl-5">
            <div className="py-7 text-2xl">
                <BsFillInfoCircleFill className="hover:opacity-70 " title="Create Your Comment"/>
            </div>
            <form className="flex flex-col w-full pr-[10%] pl-5 gap-y-5 py-5 items-center" onSubmit={submitHandler}>
                <input placeholder="Username" className="rounded-lg focus:outline-none border-2 border-solid border-gray-200 p-3 w-full" name="user" onChange={changeHandler} value={formData.user} />
                <textarea placeholder="Your Comment" className="w-full rounded-lg focus:outline-none resize-none min-h-[100px] border-2 border-solid border-gray-200 p-3" name="comment" onChange={changeHandler} value={formData.comment} />
                <input type="submit" className="rounded-xl text-white bg-black cursor-pointer px-5 py-3 hover:opacity-70 w-1/4"/>
            </form>
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
 
export default CreateComment;