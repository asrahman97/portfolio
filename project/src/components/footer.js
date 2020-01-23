import React from "react";


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FaGithubSquare } from '@fortawesome/free-solid-svg-icons'
// import { FaGithubSquare } from "react-icons/fa";

// import { ICON_NAME } from "react-icons/go";




const Footer = props => {
  return (
    <div className="contact">
      <a href="https://github.com/asrahman97" target="blank">
        <img
          src="https://www.iconninja.com/files/604/580/1001/github-development-code-coding-program-programming-icon.svg"
          id="github"
          className="social-img"
        ></img>
      </a>
      <a href="https://www.linkedin.com/in/ashikur-rahman-42167785/" target="blank">
        <img
          src="https://www.searchpng.com/wp-content/uploads/2019/03/Linkedin-Icon-PNG-1.png"
          id="linkedIn"
          className="social-img"
        ></img>
      </a>
      <a href="https://www.instagram.com/a.sh.money/" target="blank">
        <img
          src="https://cdn.freebiesupply.com/images/large/2x/instagram-icon-white-on-black-circle.png"
          id="instagram"
          className="social-img"
        ></img>
      </a>
    </div>
  );
};

export default Footer;
