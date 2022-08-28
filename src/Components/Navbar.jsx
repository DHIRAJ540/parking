import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="nav_container">
        <div>
          <h5 className="logo">Parkerrr</h5>
        </div>
        <div className="nav_items">
          <p>Cars</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
