import React from "react";
import { BsInstagram, BsGithub, BsLinkedin} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social" style={{ zIndex: "999" }}>
      <div>
        <a href="https://github.com/michael-padin" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href = "https://www.linkedin.com/in/michael-padin-96b758168" target = "_blank">
        <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://facebook.com/mokiiiiieeeee" target = "_blank">
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
