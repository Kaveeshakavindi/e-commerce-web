import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import { BsHandbag } from 'react-icons/bs';
import '../assets/colors.css';



function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>

        <nav className="navbar">
          <div className="navbar-container container">

            

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes color="black"/> : <FaBars color="black"/>}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Collection
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>

            </ul>

            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              The Arc.
            </Link>

            <NavLink to="/bag"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  } id="bag"
                  onClick={closeMobileMenu}>
                  Bag (0)
            </NavLink>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
