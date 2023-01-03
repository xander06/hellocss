import { NavLink } from "react-router-dom";

const NavBar = () => {
    
    return (
        <>
            <div className="nav-tittle">
               <NavLink className={({isActive}) => isActive ? "navelementact" : "navelement"}  to="/">Home</NavLink>
               <NavLink className={({isActive}) => isActive ? "navelementact" : "navelement"} to="/imgcalc">IMC Calculator</NavLink>
               <NavLink className={({isActive}) => isActive ? "navelementact" : "navelement"} to="/agecalc">Age Calculator</NavLink>
               <div className="logo"><img src="../img/logo.png" alt="Logo kruger"/>
               <p > Kruger Start</p></div> 
               <NavLink className={({isActive}) => isActive ? "navelementact" : "navelement"} to="/clock">My Clock</NavLink>
               <NavLink className={({isActive}) => isActive ? "navelementact" : "navelement"} to="/about">About Me</NavLink>
               <NavLink className={({isActive}) => isActive ? "navelementact" : "navelement"} to="/contact">Contact</NavLink>
              
               
            </div>
        </>
    );
}
export default NavBar
