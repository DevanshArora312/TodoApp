import React, { useEffect,useState } from 'react'
import NavBar from '../components/NavBar'
import pfp from "/pfp.png"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProfile = () => {
    const navigate = useNavigate();
    const [user,setUser] = useState({
        username : '',
        bio : ''
    });
    const token = useSelector(state => state.auth.token);
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/get-user`,{method:"POST",headers:{"Content-Type" : "application/json"},body:JSON.stringify({token})})
        .then(res => {
            return res.json();
        })
        .then(data => {
            // console.log(data)
            setUser(data.user);
        })
        .catch(err=> {
            console.log(err.message);
            navigate("/login");
        })
    },[])
    // console.log(user)
    useEffect(()=>{
        toast.onChange(v => {
            if(v.status === "removed" && v.type === 'success'){
                navigate("/profile");
            }
        })
        return()=>{
            toast.onChange(undefined)
        }
    },[toast])
    const changeHandler = (e) => {
        setUser (prev => {
            return {
                ...prev,
                [e.target.name] : e.target.value
            }
        })
    }
    const updateHandler = async (e) => {
        e.preventDefault();
        fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/update-user`, {method: "PUT" , headers : {"Content-Type" : "application/json"} , body:JSON.stringify({user,token})})
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
    
  return (
    <div className='w-screen h-screen'>
        <NavBar/>
        {
            user ? <div className='w-full h-[55%] relative'>
            <div className='w-full h-2/3' style={{background:"url(/profile.jpg)",backgroundPosition:"center"}} />
            <div className='w-full h-1/3 flex justify-center p-2'>
                <img className='rounded-full h-[130px] w-[130px] flex flex-col items-center' src={pfp}/>
                <div className='h-full w-[75%] flex flex-col items-start px-3'>
                    <div className='flex w-full justify-between text-black/40 p-2'>
                        <input value={user && user.username ? user.username : ""} onChange={changeHandler} name='username' className='border-b-black border-b-2 focus:outline-none text-black p-2 text-[20px]' placeholder='Enter username..'/>
                        <button className='text-[15px] bg-black min-w-[70px] rounded-lg text-white ' onClick={updateHandler}>
                            Save
                        </button>
                    </div>
                    <div className='flex w-full justify-between pl-2'>
                        <input value={user && user.bio ? user.bio : ""} onChange={changeHandler} name='bio' className='border-b-black border-b-2 focus:outline-none text-black p-2 text-[20px]'  placeholder='Enter bio..'/>
                    </div>
                    {/* <div className='flex w-full justify-between pl-2'>
                        <input type="file" name='pfp' className='border-b-black border-b-2 focus:outline-none text-black p-2 text-[15px]'  placeholder='Enter profile picture..'/>
                    </div> */}
                </div>
            </div>
        </div> :
        <div className='text-black text-[20px] p-10'>
            Loading....
        </div>    
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
  )
}

export default UpdateProfile;