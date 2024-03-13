// Navbar.js
import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { LiaTimesSolid } from "react-icons/lia";
import Menu from "./Menu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <div className={`bar ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        {menuOpen ? (
          <LiaTimesSolid size={"40"} style={{ color: 'red', zIndex: '999', border: '2px solid black', borderRadius: '.5rem' }} />
        ) : (
          <LuMenu size={"40"} />
        )}
      </div>
      <Menu isOpen={menuOpen} closeMenu={closeMenu} />
    </div>
  );
};

export default Navbar;
