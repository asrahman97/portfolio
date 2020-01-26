import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faLaptopCode} />


const Project = props => {
  return (
    <div className="ind-project-wrapper">
      <div className="project" key={props.key}>
        <h1 className='project-title'>{props.name}</h1>
        <p>{props.description}</p>
        <div className="img-button-cont">
          <div class="mac-setup">
          <a href={props.url} target="_blank"><img src={props.img} alt='project' className="project-pictures" /></a>
          </div>
          <a href={props.url} target="_blank">
            <span className='icon-fa'>{element}</span>
          </a>
        </div>
        <div className="language-wrapper">
          <h3>SKILLS USED</h3>
          <div className="languages">
            {props.languages.map(lang => (
              <p className="language">{lang}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
