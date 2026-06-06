import React, { useState, useEffect, useCallback, FC } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { GitHubRepo } from "../../types";

interface ProjectCardProps {
  id: number;
  value: GitHubRepo;
}

const ProjectCard: FC<ProjectCardProps> = ({ value }) => {
  const [updatedAt, setUpdatedAt] = useState<string>("0 mints");

  const handleUpdatetime = useCallback(() => {
    const date = new Date(value.updated_at);
    const nowdate = new Date();
    const diff = nowdate.getTime() - date.getTime();
    const hours = Math.trunc(diff / 1000 / 60 / 60);

    if (hours < 24) {
      setUpdatedAt(`${hours.toString()} hours ago`);
    } else {
      const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
      ];
      const day = date.getDate();
      const monthIndex = date.getMonth();
      const year = date.getFullYear();
      setUpdatedAt(`on ${day} ${monthNames[monthIndex]} ${year}`);
    }
  }, [value.updated_at]);

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  const { name, description, html_url, stargazers_count } = value;

  return (
    <div className="col-md-6">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description || "No description available"}</p>
          <a
            href={`${html_url}/archive/master.zip`}
            className="btn btn-outline-secondary mr-3"
          >
            <FontAwesomeIcon icon={faGithub} /> Clone Project
          </a>
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary"
          >
            <FontAwesomeIcon icon={faGithub} /> Repo
          </a>
          <hr />
          <Language url={`${html_url}/languages`} />
          <p className="card-text">
            <span className="text-dark card-link mr-4">
              <FontAwesomeIcon icon={faGithub} /> Stars{" "}
              <span className="badge badge-dark">{stargazers_count}</span>
            </span>
            <small className="text-muted">Updated {updatedAt}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

interface LanguageProps {
  url: string;
}

const Language: FC<LanguageProps> = ({ url }) => {
  const [data, setData] = useState<Record<string, number>>({});

  const handleRequest = useCallback(() => {
    axios
      .get<Record<string, number>>(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [url]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const languages = Object.keys(data);
  const totalCount = Object.values(data).reduce((sum, val) => sum + val, 0);

  return (
    <div className="pb-3">
      Languages:{" "}
      {languages.map((language) => (
        <span key={language} className="badge badge-light card-link mr-1">
          {language}: {Math.trunc((data[language] / totalCount) * 1000) / 10} %
        </span>
      ))}
    </div>
  );
};

export default ProjectCard;
