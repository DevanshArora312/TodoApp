import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const deleteHandler = (id,setDeleted) =>{
    fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/delete-todo/${id}`,{method: "DELETE" })
    .then(res => {
        return res.json();
    })
    .then( data => {
        if (data.success){
            setDeleted(true);
            toast.success('Deleted Successfully !', {
                position: "top-right",
                autoClose: 500,
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

export default deleteHandler;