import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const deleteHandler = (id,setChanged,todoID) => {
    fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/comments/delete/${id}`,{
        method: "DELETE"
    }).then( res => {
        return res.json();
    })
    .then(data => {
        if (data.success){
            toast.success('Deleted comment Successfully!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                data:"child"
            });
            setChanged(prev => {return (!prev)} );
        }
    })
    .catch(err => {
        toast.error('Some Error Occured!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            data:"child"
            });
    })
}

export default deleteHandler;