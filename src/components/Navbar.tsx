import React, { useState } from "react";
import "./Navbar.css";

interface Props {
  searchMovie: (s: string) => void;
}

const Navbar: React.FC<Props> = ({ searchMovie }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length > 2) {
      searchMovie(e.target.value);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-text-upper">powered by</div>
        <div className="logo-text-lower">the movie db</div>
      </div>
      <input
        type="text"
        placeholder="Search Movie Title"
        onChange={(e) => handleChange(e)}
        value={searchTerm}
      />
    </nav>
  );
};

export default Navbar;
