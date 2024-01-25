import React, { Suspense, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate,Link } from 'react-router-dom'
import { setToken } from '../redux/slices/auth';
import { setError } from '../redux/slices/error';

const Login = () => {
    const errStored = useSelector(state => state.error.error);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token)
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/isLoggedIn`,{method:"POST",headers:{"Content-Type" : "application/json"},body:JSON.stringify({token})})
        .then(res => {
            return res.json();
        })
        .then(data => {
            if(data.success){
                navigate('/');
            } else{
                dispatch(setError(data.message));
            }
        })
        .catch(err => {
            dispatch(setError(err.message));
        })
    },[])
    const [formData,setFormData] = useState({
        email : "",
        password : ""
    });
    const changeHandler = (e) => {
        setFormData (prev => {
            return {
                ...prev,
                [e.target.name] : e.target.value
            }
        })
    }
    const submitHandler = e =>{
        e.preventDefault();
        fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/login`,{method:"POST",headers:{"Content-Type" : "application/json"},body:JSON.stringify(formData)})
        .then(res => {
            return res.json();
        })
        .then(data => {
            if(data.success){
                dispatch(setToken(data.token));
                navigate("/");
            }else{
                alert(data.message)
            }
        })
        .catch(err => {
            alert(err.message)
        })
    }
  return (
    <div className='w-full h-screen bg-transparent flex justify-center items-center'>
        <div 
        style={{background:"url(/login-bg.jpg)",backgroundSize:"cover",filter:"brightness(70%)"}}
        className='absolute top-0 left-0 w-screen h-screen'
        />
        <div className= 'min-w-[280px] z-10 w-[40%] flex flex-col px-4 py-8 justify-center items-center backdrop-blur-md bg-white/10 rounded-2xl gap-y-2'>
            <h1 className='sm:text-[30px] text-[20px] text-white mb-6'>Login to your account!</h1>
            <form className='w-full h-full flex flex-col items-center justify-between gap-y-10' onSubmit={submitHandler}>
                <input className='text-white/50 p-2 w-[90%] h-10 bg-transparent/60 border-b-2 rounded-md focus:outline-none duration-500' name='email' type='email'  placeholder='Email' value={formData.email} onChange={changeHandler}/>
                <input className='text-white/50 p-2 w-[90%] h-10 bg-transparent/60 border-b-2 rounded-md focus:outline-none duration-500' name='password' type='password'  placeholder='Password' value={formData.password} onChange={changeHandler}/>
                <input className='bg-black text-white hover:text-black hover:bg-white duration-500 focus:outline-none hover:shadow-lg hover:shadow-white rounded-xl p-3' type='submit' />
            </form>
            <div className='text-white text-[13px] sm:text-[18px] gap-x-1 mt-2 flex'> 
                <p>
                New here?
                </p> 
                <Link to="/signup" className='hover:opacity-60 underline'>
                    Register!
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Login;

