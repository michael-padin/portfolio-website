import React, { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";

import "./Header.scss";

import { client } from "../../client.js";

import { images } from "../../constants";

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
  const [resume, setResume] = useState({});
  const fileLink = resume.resumeUrl?.asset.url;

  useEffect(() => {
    const resumeQuery = '*[_type == "resume"]{title, resumeUrl{asset->{url}}}';
    client.fetch(resumeQuery).then((data) => {
      setResume(Object.assign({}, data[0]));
    });
  }, []);

  return (
    <div className="app__header app__flex">
      <div className="right-circle" />
      <div className="left-circle" />
      <motion.div
        whileInView={{ x: [-100, 0], opacity: 1 }}
        transition={{ delay: 0.5 }}
        className=" app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div>
              <h1>
                Hi, I'm Michael <br />
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
                  href={fileLink}
                  style={{ textDecoration: "none", color: "#2190ff" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        layout
        variants={scaleVariants}
        whileInView={{ y: [-100, 0], opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="app__header-circles"
      >
        <div className="app__header-img app__flex ">
          <img src={images.me} alt="hero profile"/>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(memo(Header), "home");
