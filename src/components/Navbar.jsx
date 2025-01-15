// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import menu from "../logo/menu.png";
import checklist from "../logo/checklist.png";
import search from "../logo/search.png";
import widget from "../logo/widget.png";
import mode from "../logo/mode.png";
function Navbar() {
  return (
    <div className="nav">
     <Link to="/">
      <img src={menu} alt="App Logo" className="navbar-menu" />{""}
     </Link>
      
     
      <img src={checklist} alt="App Logo" className="navbar-checklist" />{""}
     
      {/* Display the logo */}
      <h5 className="navbar-heading">DoIt</h5>
     <Link to="/Search">
      <img src={search} alt="App Logo" className="navbar-search" />{" "}
     </Link>
      <Link to="/Widget">
      <img src={widget} alt="App Logo" className="navbar-widget" />{" "}
      </Link>
     
    <Link to="Mode">
      <img src={mode} alt="App Logo" className="navbar-mode" />{" "}
    </Link>
      
     

    </div>
  );
}

export default Navbar;
