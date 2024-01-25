import { RxCross2 } from "react-icons/rx";
import {Link} from "react-router-dom";
import { dispatch } from "../redux/store";
import { setToken } from "../redux/slices/auth";
import { useSelector } from "react-redux";

const Sidebar = ({vis,setVis}) => {
    const token = useSelector(state => state.auth.token);
    const sideItem = {
        padding: "1rem",
        display: vis ? "flex" : "",
        justifyContent : "flex-end",
        fontSize :20,
        paddingRight : "25px" 
    }
    const sideBarStyle = {
        borderRadius: "10px",
        height: "100vh", 
        width: vis ? "100vw" : 0,
        position: "fixed", 
        zIndex: 2,
        top: 0,
        right: 0,
        backgroundColor: "white",
        overflowY: "hidden", 
        paddingTop: "20px",
        paddingLeft:"10px", 
        transition: "0.5s", 
        
        
    }
    return ( 
        <div id="sideBar" style={sideBarStyle}>
            <div style = {sideItem}>
                <button onClick={() => {setVis(!vis)}}>
                    <RxCross2 style={{textDecoration:"none",color:"black",fontSize:25}}/>
                </button>
            </div>
            <div style = {sideItem}>
                <Link to ="/" style={{textDecoration:"none",color:"black"}}>Home</Link>
            </div>
            <hr style={{
                width:"100%"
            }}/>
            <div style = {sideItem}>
                <Link to ="/profile" style={{textDecoration:"none",color:"black"}}>Profile</Link>
            </div>
            <hr style={{
                width:"100%"
            }}/>
            <div style = {sideItem}>
                <Link to="/create-todo" className = "hover:opacity-60">
                    New Task
                </Link>
            </div>
            <hr style={{
                width:"100%"
            }}/>
            <div style = {sideItem}>
                <Link to="/login" style={{textDecoration:"none",color:"black"}} onClick={() => dispatch(setToken(""))}>Logout </Link>
            </div>
            <hr style={{
                width:"100%"
            }}/>
            
            
        </div>
     );
}
 
export default Sidebar
