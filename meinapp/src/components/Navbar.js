import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
const Navbar = () => {
    return (
      
        
    <div className="navi">
            
                 <div className="link1">
                 <NavLink className="link" to="/" >
                        StartSeite
                    </NavLink>
                     <NavLink className="link" to="/herren" >
                        Herren
                    </NavLink>
                    <NavLink className="link" to="/frauen" >
                        Frauen
                    </NavLink>
                    <NavLink className="link" to="/kinder" >
                        Kinder
                    </NavLink> 
                     {/* <NavLink className="link" to="/kontakt" >
                        Kontakt
                    </NavLink>  */}

                 <select>
                <option>Englisch</option>
                <option>Deutsch</option>
                <option>Arabisch</option>
            </select>
                 </div>
        
        </div>
    );
};

export default Navbar;
