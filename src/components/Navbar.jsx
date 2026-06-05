import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pdf from "../editable-stuff/resume.pdf";
import logo from "../avlogo.png";
import config from "../editable-stuff/configurations.json";

const { showBlog } = config;

const Navbar = (props) => {
  const [isTop, setIsTop] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const istop = window.scrollY < 200;
      if (istop !== isTop) {
        setIsTop(istop);
      }
    });
  }, [isTop]);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const closeNavbar = () => {
    setIsExpanded(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-light ${
        isTop ? "bg-transparent" : "bg-gradient"
      } `}
    >
      <a className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}>
        <img src={logo} alt="Logo" height="50px" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarTogglerDemo02"
        aria-expanded={isExpanded}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`} id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          {showBlog && (
            <li className="nav-item">
              <Link
                className="nav-link lead"
                to={process.env.PUBLIC_URL + "/blog"}
                onClick={closeNavbar}
              >
                Blog
              </Link>
            </li>
          )}
          <li className="nav-item">
            <a
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#projects"}
              onClick={closeNavbar}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link lead"
              href={Pdf}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Resume (opens in new tab)"
            >
              <b>Resume</b>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
              onClick={closeNavbar}
            >
              <b>About</b>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
