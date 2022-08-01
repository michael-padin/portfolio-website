import React from "react";
import { motion } from "framer-motion";

import myResume from "../../assets/MichaelPadin-resume.pdf"
import { AppWrap } from "../../wrapper";

import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <div className="right-circle" />
      <div className="left-circle" />
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className=" app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div>
              <h1>
                Hi, I am Michael <br />
                <span>Full stack </span>Developer
              </h1>
            </div>
            <p className="p-text">
              Solution-oriented and problem solver, experience building web
              applications using MERN stack technologies. Have done numerous
              projects involving frontend and backend development
            </p>
            <div className="app__header-button-area">
              <button className="primary-button buttons" type="button">
                <a
                  href="#about"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  About Me
                </a>
              </button>
              <button className="secondary-button buttons" type="button">
              <a
                  href={myResume}
                  style={{ textDecoration: "none", color: "#2190ff" }}
                  download = "MichaelPadin-resume.pdf"
                >
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      ></motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
