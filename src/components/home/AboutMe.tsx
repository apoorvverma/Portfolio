import React, { FC } from "react";
import Pdf from "../../editable-stuff/resume.pdf";
import config from "../../editable-stuff/configurations.json";
import { AppConfig } from "../../types";

const typedConfig = config as AppConfig;
const { aboutHeading, aboutDescription } = typedConfig;

const AboutMe: FC = () => {
  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid p-5">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="display-4 mb-5 text-center">{aboutHeading}</h1>
            <p className="lead text-center">{aboutDescription}</p>
            <p className="lead text-center">
              <br />
              <a
                className="btn btn-outline-dark btn-lg"
                href={Pdf}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV (opens in new tab)"
              >
                Résumé
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
