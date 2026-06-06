import React, { useState, useEffect, useCallback, FC } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import config from "../../editable-stuff/configurations.json";
import { GitHubRepo, AppConfig } from "../../types";

const typedConfig = config as AppConfig;
const { projectHeading, gitHubLink, gitHubUsername, gitHubQuerry, projectsLength } = typedConfig;

const Project: FC = () => {
  const [projectsArray, setProjectsArray] = useState<GitHubRepo[]>([]);

  const handleRequest = useCallback(() => {
    axios
      .get<GitHubRepo[]>(gitHubLink + gitHubUsername + gitHubQuerry)
      .then((response) => {
        setProjectsArray(response.data.slice(0, projectsLength));
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  return (
    <div id="projects" className="jumbotron jumbotron-fluid bg-transparent m-0">
      {projectsArray.length > 0 && (
        <div className="container container-fluid p-5">
          <h1 className="display-4 pb-5">{projectHeading}</h1>
          <div className="row">
            {projectsArray.map((project) => (
              <ProjectCard key={project.id} id={project.id} value={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
