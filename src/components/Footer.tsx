import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const Footer: FC = () => {
  return (
    <footer style={{ backgroundColor: "#f5f5f5" }} className="mt-auto py-3 text-center">
      <FontAwesomeIcon icon={faCode} /> with{" "}
      <FontAwesomeIcon icon={faHeart} style={{ color: "#e73c7e" }} />{" "}
      using <FontAwesomeIcon icon={faReact} style={{ color: "#61dafb" }} />
      <p>
        <small className="text-muted">
          Project code is open source. Feel free to fork and make your own
          version.
        </small>
      </p>
    </footer>
  );
};

export default Footer;
