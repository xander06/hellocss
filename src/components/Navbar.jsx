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
               <NavLink className={({isActive}) => isActive ? "navelementact" : "navelement"} to="/about">IMC Calculator</NavLink>
               <NavLink className={({isActive}) => isActive ? "navelementact" : "navelement"} to="/contact">Age Calculator</NavLink>
               <div className="logo"><img src="https://krugercorp.com/wp-content/uploads/2022/10/logo-Kruger-Principal.png"/>
               <a > kruger</a></div> 
               <NavLink className={({isActive}) => isActive ? "navelementact" : "navelement"} to="/">My Clock</NavLink>
               <NavLink className={({isActive}) => isActive ? "navelementact" : "navelement"} to="/about">About Me</NavLink>
               <NavLink className={({isActive}) => isActive ? "navelementact" : "navelement"} to="/contact">Contact</NavLink>
              
               
            </div>
        </>
    );
}
export default NavBar
