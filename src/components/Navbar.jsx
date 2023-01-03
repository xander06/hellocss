import { NavLink } from "react-router-dom";

const NavBar = () => {
    const navelement="navelement";
    const navelementact="navelementact";
    return (
        <>
            <div className="nav-tittle">
              {/* <a href="#">Home</a>
               <a href="#">About</a>
               <a href="#">Contact</a>  */}
               <NavLink className={({isActive}) => isActive ? "navelementact" : "navelement"}  to="/">Home</NavLink>
               <NavLink className={({isActive}) => isActive ? "navelementact" : "navelement"} to="/imgcalc">IMC Calculator</NavLink>
               <NavLink className={({isActive}) => isActive ? "navelementact" : "navelement"} to="/agecalc">Age Calculator</NavLink>
               <div className="logo"><img src="../img/logo.png" alt="Logo kruger"/>
               <a > Kruger Start</a></div> 
               <NavLink className={({isActive}) => isActive ? "navelementact" : "navelement"} to="/clock">My Clock</NavLink>
               <NavLink className={({isActive}) => isActive ? "navelementact" : "navelement"} to="/about">About Me</NavLink>
               <NavLink className={({isActive}) => isActive ? "navelementact" : "navelement"} to="/contact">Contact</NavLink>
              
               
            </div>
        </>
    );
}
export default NavBar
