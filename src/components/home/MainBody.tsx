import React, { useState, FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import config from "../../editable-stuff/configurations.json";
import { SocialIcon, AppConfig } from "../../types";

const typedConfig = config as AppConfig;
const { FirstName, LastName, MiddleName, devDesc, icons } = typedConfig;

interface HoverToggleData {
  icon: SocialIcon;
  event: "enter" | "leave";
}

const MainBody: FC = () => {
  const [hoverstatus, setHoverstatus] = useState<string[]>(
    new Array(icons.length).fill("socialicons")
  );

  const toggleHover = (data: HoverToggleData): void => {
    const newhoverStatus = [...hoverstatus];

    if (data.event === "enter") {
      newhoverStatus[data.icon.id] = "socialiconshover";
      setHoverstatus(newhoverStatus);
    } else if (data.event === "leave") {
      newhoverStatus[data.icon.id] = "socialicons";
      setHoverstatus(newhoverStatus);
    }
  };

  return (
    <div>
      <div
        id="home"
        className="title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <div className="container container-fluid text-center ">
          <h1 className="display-1">
            <b>{FirstName + " " + MiddleName + " " + LastName}</b>
          </h1>
          <span className="lead"> {devDesc}</span>
          <div className="p-5">
            {icons.map((icon: SocialIcon) => (
              <a
                key={icon.id}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`View my ${icon.label}`}
                className="social-icon-link"
              >
                <FontAwesomeIcon
                  icon={["fab", icon.image.replace("fa-", "")]}
                  size="3x"
                  className={hoverstatus[icon.id]}
                  onMouseOver={() => toggleHover({ icon, event: "enter" })}
                  onMouseOut={() => toggleHover({ icon, event: "leave" })}
                />
              </a>
            ))}
          </div>
          <a
            className="btn btn-outline-light btn-lg"
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
