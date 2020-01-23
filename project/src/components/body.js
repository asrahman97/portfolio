import React, { Component } from "react";
import Project from "./project";
import { ball_is_life } from "../images/ball_is_life.gif";

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
          languages: [
            "React",
            "HTML",
            "CSS",
            "JavaScript",
            "Random Person API"
          ]
        }
        ,
        {
          name: "Cheetoh Photo",
          description: "Instagram but for Cheetahs",
          img: "https://media.giphy.com/media/ZCTv1Ft6ooeSO920Ok/giphy.gif",
          url: "http://cheetohphoto.surge.sh",
          languages: [
            "React",
            "HTML",
            "CSS",
            "JavaScript",
            "Express Router",
            "Sequelize"
          ]        }
        ,
        {
          name: "Cheetoh Photo",
          description: "Instagram but for Cheetahs",
          img: "https://media.giphy.com/media/ZCTv1Ft6ooeSO920Ok/giphy.gif",
          url: "http://cheetohphoto.surge.sh",
          languages: [
            "React",
            "HTML",
            "CSS",
            "JavaScript",
            "Express Router",
            "Sequelize"
          ]        }
      ],
      typed: false,
      count: 0
    };
  }

  typeWriter = () => {
    let i = 0;
    let txt = [
      "a self-starter.",
      "passionate.",
      "inquisitive.",
      "a goal accomplisher.",
      "quality-driven."
    ];
    let count = this.state.count;
    let speed = 95;
    let currentcomponent = this;

    if (this.state.typed === false) {
      let typing = setInterval(function() {
        if (i < txt[count].length) {
          document.getElementById("input").innerHTML += txt[count].charAt(i);
          i++;
        }
        if (i >= txt[count].length) {
          count++;
          if (count >= txt.length) {
            currentcomponent.setState({
              typed: true,
              count: 0
            });
          } else {
            currentcomponent.setState({
              typed: true,
              count
            });
          }
          clearInterval(typing);
        }
      }, speed);
    }
  };

  blinking = () => {
    setInterval(function() {
      document.getElementById("cursor").classList.toggle("zeroop");
    }, 500);
  };

  removing = () => {
    let currentcomponent = this;
    let typeWriter = this.typeWriter;

    if (this.state.typed === true) {
      setTimeout(() => {
        let txt = document.getElementById("input").innerHTML;
        let i = txt.length;
        let speed = 40;
        function deleter() {
          if (i >= 0) {
            txt = txt.slice(0, txt.length - 1);
            document.getElementById("input").innerHTML = txt;
            i--;
            setTimeout(deleter, speed);
          }
          if (i === 0) {
            currentcomponent.setState({
              typed: false
            });
            typeWriter();
          }
        }
        deleter();
      }, 1500);
    }
  };

  componentDidMount = () => {
    this.typeWriter();
    this.blinking();
  };

  componentDidUpdate = () => {
    this.removing();
  };

  render() {
    return (
      <div className="content-wrapper">
        <div className="intro" id="intro">
          <h3>
            and I am{" "}
            <span id="typewriter">
              <span id="input"></span>
              <span id="cursor">|</span>
            </span>
          </h3>
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
        <div className="section-header" id="workdiv">
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
