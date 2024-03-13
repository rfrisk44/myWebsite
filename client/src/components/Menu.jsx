// Menu.js
import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";

const Menu = ({ isOpen, closeMenu }) => {
  const handleClick = () => {
    closeMenu(); // Call the closeMenu function when a link is clicked
  };

  return (
    <div className={`menu ${isOpen ? "open" : ""}`} style={{ zIndex: "900" }}>
      {isOpen && ( // Ensure the menu is only rendered when isOpen is true
        <>
          <Link to="/" className="menuItem" onClick={handleClick}>
            <FaHome size={40}/>Home
          </Link>
          <Link to="/projects" className="menuItem" onClick={handleClick}>
            <FaHammer size={40}/>Projects
          </Link>
          <Link to="/contact" className="menuItem" onClick={handleClick}>
            <RiContactsBook2Fill size={40}/>Contact
          </Link>
        </>
      )}
    </div>
  );
};

export default Menu;
