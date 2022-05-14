import React, { useState } from "react";
import {  HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle ? (
          <motion.div
            initial = {{x: 300}}
            animate = {{x: 0}}
            transition={{ duration: 0.75, ease: "backOut"}}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
            {["home", "about", "work", "skills", "contact"].map((item) => (
              <li className="app__flex p-text" key={`link-${item}`}>
                <a onClick={() => setToggle(false)} href={`#${item}`}>{item}</a>
              </li>
            ))}
            </ul>
          </motion.div>
        ): <motion.div
        initial = {{x: 1000}}
        animate = {{x: 1000 }}
        transition={{ duration: 0.75, ease: "backIn"}}
      >
        <HiX onClick={() => setToggle(false)} />
        <ul>
        {["Home", "About", "Work", "Skills", "Contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a onClick={() => setToggle(false)} href={`#${item}`}>{item}</a>
          </li>
        ))}
        </ul>
      </motion.div>}
      </div>
    </nav>
  );
};

export default Navbar;
