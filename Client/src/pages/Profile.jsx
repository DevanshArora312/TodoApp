import React, { useEffect,useState } from 'react'
import NavBar from '../components/NavBar'
import pfp from "/pfp.png"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const [user,setUser] = useState(null);
    const navigate = useNavigate();
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

  return (
    <div className='w-screen h-screen'>
        <NavBar/>
        {
            user ? <div className='w-full h-[55%] relative'>
            <div className='w-full h-2/3' style={{background:"url(/profile.jpg)",backgroundPosition:"center"}} />
            <div className='w-full h-1/3 flex justify-center p-2'>
                <img className='rounded-full h-[130px] w-[130px] flex flex-col items-center' src={pfp}/>
                <div className='h-full w-[75%] flex flex-col p-4 text-[30px] px-3'>
                    <div className='flex w-full justify-between'>
                        <h1>
                            {user.username}
                        </h1>
                        <button className='text-[15px] bg-black min-w-[50px] rounded-lg text-white p-2' onClick={()=> {navigate('/update-profile')}}>
                            Update Profile
                        </button>
                    </div>
                    <div className='text-[20px] text-black/40 p-2'>
                        { user && user.bio ? user.bio : "(Empty bio)"}
                    </div>
                </div>
            </div>
        </div> :
        <div>
            Loading....
        </div>    
        }
    </div>
  )
}

export default Profile