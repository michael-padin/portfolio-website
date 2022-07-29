import React from "react";
import { motion } from "framer-motion";

import {AppWrap} from "../../wrapper";

import "./Header.scss";



const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className=" app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: 20 }}>
              <p className="p-text"> Hello, I am</p>
              <h1 className="head-text"> Michael</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text"> Front End Developer</p>
            <p className="p-text"> Backend Developer</p>
          </div>
        </div>
      </motion.div>


      
    </div>
  );
};

export default AppWrap(Header, 'home');
