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
               <NavLink className={({isActive}) => isActive ? "navelementact" : "navelement"} to="/about">About</NavLink>
               <NavLink className={({isActive}) => isActive ? "navelementact" : "navelement"} to="/contact">Contact</NavLink>
               <div className="logo"><img src="https://krugercorp.com/wp-content/uploads/2022/10/logo-Kruger-Principal.png"/>
               <a > kruger</a></div> 
               <NavLink className={({isActive}) => isActive ? "navelementact" : "navelement"} to="/">IMC CALCULATOR</NavLink>
               <NavLink className={({isActive}) => isActive ? "navelementact" : "navelement"} to="/about">PAGINA 3</NavLink>
               <NavLink className={({isActive}) => isActive ? "navelementact" : "navelement"} to="/contact">PAGINA 4</NavLink>
              
               
            </div>
        </>
    );
}
export default NavBar
