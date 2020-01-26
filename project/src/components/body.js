import React, { Component } from "react";
import Project from "./project";

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          name: "Is Ball Life?",
          description: "A Basketball Quiz",
          img: "https://media.giphy.com/media/KFb0EObldOk7sDGicf/giphy.gif",
          url: "http://ballislife.surge.sh/",
          languages: [
            "HTML",
            "CSS",
            "JavaScript",
            "Ball Don't Lie API",
            "Event-Listeners"
          ]
        },
        {
          name: "Elegant Planning",
          description: "A Zola Clone",
          img: "https://media.giphy.com/media/ZCTv1Ft6ooeSO920Ok/giphy.gif",
          url: "http://wedding-planning.surge.sh/main",
          languages: ["React", "HTML", "CSS", "JavaScript", "Random Person Generator API"]
        },
        {
          name: "Cheetoh Photo",
          description: "Full Stack Photo App",
          img: "https://media.giphy.com/media/ZaX7o6vk79BVRKA0nN/giphy.gif",
          url: "http://cheetohphoto.surge.sh",
          languages: [
            "React",
            "HTML",
            "CSS",
            "JavaScript",
            "Express Router",
            "Sequelize"
          ]
        }
      ]
    };
  }
  

  

  componentDidMount = () => {
   
  };

  componentDidUpdate = () => {
    this.removing();
  };

  render() {
    return (
      <div className="content-wrapper">
        <div>
          
          <p className="summary">
            I am a Software Engineer and Email Marketer interested in
            programming applications and products that have an impact on
            someone's day. With a background in the sports and travel media
            industries, I bring an eye specializing in both client and customer
            insights, focusing on results and ease-of-use. When combining both
            perspectives, I believe creating meaningful solutions becomes that
            much closer to reality. I strive to work in a collaborative and
            empathetic environment where the tasks are impactful and there is
            oppurtunity for growth.
          </p>
        </div>
        <div className="section-header">
          <h1 className="my-work-h1">My Projects</h1>
          <div className="projects-wrapper">
            {this.state.projects.map((project, key) => (
              <Project
                name={project.name}
                description={project.description}
                img={project.img}
                url={project.url}
                languages={project.languages}
                key={key}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
