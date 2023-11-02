import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useCommentCreate = (formData,setFormData,setChanged,todoID) => {
    let {user,comment} = formData;
    fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/comments/create`,{method:"POST",headers:{"Content-Type" : "application/json"},body:JSON.stringify({user,comment,todoID})})
        .then(res =>{
            return res.json();
        }).then(data=>{
            if (data.success){
                toast.success('Created comment Successfully !', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    data : "child"
                });
                setFormData({
                    user :"",
                    comment:""
                })
                setChanged(prev => {return (!prev)} );
            }
    
        }).catch(err => {
            console.log(err);
            toast.error('Some Error Occured!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                data : "child"
            });
        })
}
 
export default useCommentCreate;