import {Link} from "react-router-dom"
import { setToken } from "../redux/slices/auth";
import { useDispatch } from "react-redux";
import Sidebar from "./SideBar";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = () => {
    const dispatch = useDispatch();
    const [vis,setVis] = useState(false);
    return ( 
        <div className="w-full h-auto flex sm:justify-around justify-between items-center pt-10 px-8 sm:px-4">
            <div className="text-red-500 font-semibold text-[30px]">
                The Task List
            </div>
            <div></div>
            <div className="flex justify-between gap-x-5 text-2xl max-sm:hidden">
                <Link to="/" className = "hover:opacity-60">
                    Home
                </Link>
                <Link to="/create-todo" className = "hover:opacity-60">
                    New-Task
                </Link>
                <Link className = "hover:opacity-60" to="/profile">
                    Profile
                </Link>
                <Link to="/login" className = "hover:opacity-60" onClick={() => dispatch(setToken(""))}>
                    Logout
                </Link>
            </div>
            <div className="sm:hidden flex justify-center items-center ">
                <button className="hover:opacity-75 text-[30px]" onClick={()=>setVis(!vis)}>
                    <GiHamburgerMenu />
                </button>
                <Sidebar setVis={setVis} vis={vis}/>
            </div>
        </div>
    );
}
 
export default NavBar;