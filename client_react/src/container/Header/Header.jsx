import React from "react";
import { motion } from "framer-motion";

import {AppWrap} from "../../wrapper";

import "./Header.scss";
import {images } from "../../constants"



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
  const {node, sass, react, redux, git, typescript} = images;
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className=" app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div>
              <h1> Hello, I am Michael</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text"> Front End Developer</p>
            <p className="p-text"> Backend Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[ redux, react, sass, node, git,].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            {/* <div className = "color-overlay"/> */}
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
      
    </div>
  );
};

export default AppWrap(Header, 'home');
