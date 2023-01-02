import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <div className="nav-tittle">
              {/* <a href="#">Home</a>
               <a href="#">About</a>
               <a href="#">Contact</a>  */}
               <NavLink className="nav-element" to="/">Home</NavLink>
               <NavLink className="nav-element" to="/about">About</NavLink>
               <NavLink className="nav-element" to="/contact">Contact</NavLink>

            </div>
        </>
    );
}
export default NavBar
