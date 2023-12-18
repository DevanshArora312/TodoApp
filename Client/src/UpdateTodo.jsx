import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UpdateTodo = () => {
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        title :"",
        writtenBy:"",
        body: ""
    })
    const {id} = useParams();
    useEffect(() => {
        fetch(`http://localhost:4000/api/v1/get-todo/${id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            // console.log(data)
            setFormData(data.data);
        })
    },[])
    const updateHandler = (e) => {
        e.preventDefault();
        fetch(`http://localhost:4000/api/v1/update-todo/${id}`, {method: "PUT" , headers : {"Content-Type" : "application/json"} , body:JSON.stringify(formData)})
        .then (res =>{
            return res.json()
        })
        .then(data => {
            if (data.success){
                toast.success('Updated Successfully !', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }
            else{
                toast.error('Some Error Occured!', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }

        }).catch(err => {
            toast.error('Some Error Occured!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        })
    }
    const changeHandler = (e) => {
        setFormData (prev => {
            return {
                ...prev,
                [e.target.name] : e.target.value
            }
        })
    }
    toast.onChange(v => {
        if(v.status === "removed" && v.type === 'success'){
            navigate("/");
        }
    })
    return (  
        <div className="w-full h-full">
            <NavBar/>
            <h1 className="text-2xl px-[15%] my-5 mt-20">
                Update a Todo!
            </h1>
            <form className="text-xl w-full flex flex-col gap-10 py-10 px-[10%] justify-center items-center" onSubmit={updateHandler}>
                <input className="sm:min-w-[0px] min-w-[200px] rounded-lg border-2 focus:outline-none p-2 w-2/3" placeholder="Enter Title" id ="title" name="title" value={formData.title} onChange={changeHandler}/>
                <input className="sm:min-w-[0px] min-w-[200px] rounded-lg border-2 focus:outline-none p-2  w-2/3" placeholder="Written by" id ="writtenBy" name="writtenBy" value={formData.writtenBy} onChange={changeHandler}/>
                <textarea className="sm:min-w-[0px] min-w-[200px] text-md rounded-lg border-2 min-h-[300px] focus:outline-none p-2 resize-none w-2/3" placeholder="Enter Body" id ="body" name="body" value={formData.body} onChange={changeHandler}/>
                <input type="submit" className="rounded-xl text-white bg-black cursor-pointer px-5 py-3 hover:opacity-70"/>
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
 
export default UpdateTodo;