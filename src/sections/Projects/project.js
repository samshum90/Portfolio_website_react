import React from "react";
import PropTypes from "prop-types";

import { github, globe, devpost } from "../../assets";

const Project = ({ project }) => {
  const { title, description, img, urls, tech } = project;
  return (
    <article className="project">
      <div className="project__image-wrapper">
        <img className="project__image" src={img.src} alt={img.alt} />
      </div>
      <div className="project__details">
        <h3 className="project__title">{title}</h3>
        <p className="project__description">{description}</p>
        <div className="project__tech">
          <p>Tech:</p>
          {tech.map(({ src, alt }) => (
            <img alt={alt} className="project__tech-item" key={src} src={src} />
          ))}
        </div>
        <div className="project__links-wrapper">
          <a className="project__link" href={urls.github}>
            <img alt="Github" className="project__link-icon" src={github} />
            Code
          </a>
          {urls.live && (
            <a className="project__link" href={urls.live}>
              <img alt="Live" className="project__link-icon" src={globe} />
              Live
            </a>
          )}
          {urls.dev && (
            <a className="project__link" href={urls.dev}>
              <img alt="Devpost" className="project__link-icon" src={devpost} />
              Devpost
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    urls: PropTypes.shape({
      github: PropTypes.string.isRequired,
      live: PropTypes.string,
      dev: PropTypes.string,
    }).isRequired,
    tech: PropTypes.arrayOf(
      PropTypes.shape({
        alt: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Project;
