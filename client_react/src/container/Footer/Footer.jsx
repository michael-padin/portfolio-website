import React, { useState } from "react";
import { client } from "../../client.js";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
// import { client } from "../../client";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsForSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsForSubmitted(true);
      setTimeout(() => {
        setIsForSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 7000);
    });
  };

  return (
    <>
    
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
      <div className="app__footer-right-circle" />
      <div className="app__footer-left-circle" />
        <div className="app__footer-card buttons">
          <img src={images.email} alt="email" />
          <a href="mailto:padinmichael201@gmail.com" className="p-text">
            padinmichael201@gmail.com
          </a>
        </div>
        <div className="app__footer-card buttons">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +639089875407" className="p-text">
            +63 908 987 5407
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>

          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text"> Thank you for getting in touch! </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);

