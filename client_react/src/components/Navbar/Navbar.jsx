import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";

import "./Navbar.scss";
import { useEffect } from "react";
import { memo } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    changeNavbarBackground();

    window.addEventListener("scroll", changeNavbarBackground);
  }, []);

  const changeNavbarBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <nav className={navbar ? "app__navbar active" : "app__navbar"}>
      <div className="app__navbar-container">
        <div className="app__navbar-logo">
          <a href="#home">
            <img src={images.logo} alt="profile-logo" />
          </a>
        </div>
        <ul className="app__navbar-links">
          {["home", "about", "work", "skills", "testimonial", "contact"].map(
            (item) => (
              <li className="app__flex p-text" key={`link-${item}`}>
                <div />
                <a href={`#${item}`}>{item}</a>
              </li>
            )
          )}
        </ul>

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle ? (
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="app__navbar-menu-container"
            >
              <div className="mobile-menu-left-circle" />
              <div className="mobile-menu-right-circle" />
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {[
                  "home",
                  "about",
                  "work",
                  "skills",
                  "testimonial",
                  "contact",
                ].map((item) => (
                  <li className="app__flex p-text" key={`link-${item}`}>
                    <a onClick={() => setToggle(false)} href={`#${item}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : (
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 1000 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              className="app__navbar-menu-container"
            >
              <div className="mobile-menu-left-circle" />
              <div className="mobile-menu-right-circle" />
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {[
                  "Home",
                  "About",
                  "Work",
                  "Skills",
                  "testimonial",
                  "contact",
                ].map((item) => (
                  <li className="app__flex p-text" key={`link-${item}`}>
                    <a onClick={() => setToggle(false)} href={`#${item}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
