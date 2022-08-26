import React, { useState } from "react";
import { client } from "../../client.js";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import toast, { Toaster } from "react-hot-toast";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const year = new Date().getFullYear();
  
  const [isFormSubmitted, setIsForSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      toast.error("Please fill all the fields");
      return;
    }

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
      }, 5000);
    });
  };

  return (
    <>
      <Toaster
        position="top-left"
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#282c34",
            color: "#fff",
            padding: "20px",
          },
        }}
        containerStyle={{
          top: 90,
          left: 90,
        }}
      />
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-right-circle" />
        <div className="app__footer-left-circle" />
        <div className="app__footer-card buttons">
          <img src={images.email} alt="email" loading="lazy" />
          <a href="mailto:padinmichael201@gmail.com" className="p-text">
            padinmichael201@gmail.com
          </a>
        </div>
        <div className="app__footer-card buttons">
          <img src={images.mobile} alt="mobile" loading="lazy" />
          <a href="tel:+639984054200" className="p-text">
            +63 998 405 4200
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
              required
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
              required
            />
          </div>

          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
            />
          </div>

          <button type="submit" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text"> Thank you for getting in touch! </h3>
        </div>
      )}
      <div className="copyright">
        <p style={{ color: "#ffff", fontSize: "0.8rem" }}>@{year} Michael</p>
        <p style={{ color: "#ffff", fontSize: "0.8rem" }}>
          All rights reserved
        </p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
