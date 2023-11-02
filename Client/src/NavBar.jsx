import {Link} from "react-router-dom"

const NavBar = () => {
    return ( 
        <div className="w-full h-auto flex justify-around items-center pt-10 text-3xl">
            <div className="text-red-500 font-semibold">
                The Todo List
            </div>
            <div></div>
            <div className="flex justify-between gap-x-5 text-2xl">
                <Link to="/" className = "hover:opacity-60">
                    Home
                </Link>
                <Link to="/create-todo" className = "hover:opacity-60">
                    New Todo
                </Link>
                
            </div>
        </div>
    );
}
 
export default NavBar;