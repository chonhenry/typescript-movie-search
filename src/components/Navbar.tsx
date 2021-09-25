import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-text-upper">powered by</div>
        <div className="logo-text-lower">the movie db</div>
      </div>
      <input type="text" placeholder="Search Movie Title" />
    </nav>
  );
};

export default Navbar;
