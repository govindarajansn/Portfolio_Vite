import React from "react";
import Header from "./Header";

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", src: "assets/img/icons/java.png" },
      { name: "JavaScript", src: "assets/img/icons/JAVASCRIPT.png" },
      { name: "HTML5", src: "assets/img/icons/HTML5.png" },
      { name: "C", src: "assets/img/icons/c.png" },
      { name: "C++", src: "assets/img/icons/cplus.png" },
      { name: "SCSS", src: "assets/img/icons/sass.png" },
    ],
  },
  {
    category: "Frontend and Backend Framework",
    skills: [
      { name: "React.js", src: "assets/img/icons/REACT.png" },
      { name: "Angular", src: "assets/img/icons/ANGULAR.png" },
      { name: "Bootstrap", src: "assets/img/icons/bootstrap.png" },
      { name: "JQuery", src: "assets/img/icons/jquery.png" },
      {
        name: "Next.js",
        src: "assets/img/icons/next-js.svg",
        background: "beige",
      },
      { name: "D3.js", src: "assets/img/icons/d3.svg" },
      { name: "Express.js", src: "assets/img/icons/expressjs.png" },
      { name: "Spring Boot", src: "assets/img/icons/springboot.png" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", src: "assets/img/icons/mysql.png" },
      {
        name: "MongoDB",
        src: "assets/img/icons/MONGODB.png",
        background: "beige",
      },
      { name: "Oracle", src: "assets/img/icons/oracle.png" },
    ],
  },
  {
    category: "Technologies",
    skills: [
      { name: "AWS", src: "assets/img/icons/aws.png" },
      { name: "Microsoft suite", src: "assets/img/icons/microsoft.png" },
      { name: "Node.js", src: "assets/img/icons/nodejs.png" },
      {
        name: "GitHub",
        src: "assets/img/icons/GITHUB.png",
        background: "beige",
      },
      { name: "Linux", src: "assets/img/icons/linux.png" },
    ],
  },
];

const SkillItem = ({ name, src, background }) => (
  <div className="skill-icons">
    <img
      src={src}
      alt={name}
      className="img-fluid"
      style={{
        height: "40px",
        width: "40px",
        background: background || "transparent",
      }}
    />
    <p>{name}</p>
  </div>
);

const SkillCategory = ({ category, skills }) => (
  <>
    <h4 className="wow fadeInUp skill-heading">{category}</h4>
    <div className="skill-container">
      {skills.map((skill, index) => (
        <SkillItem key={index} {...skill} />
      ))}
    </div>
  </>
);

function Skills() {
  return (
    <section id="skills" className="about">
      <div className="container">
        <div className="display-container row">
          <div className="col-lg-8">
            {skillsData.map((data, index) => (
              <SkillCategory key={index} {...data} />
            ))}
          </div>
          <div className="col-lg-4">
            <div className="cubes-container">
              <div className="cube-wrap cube-first">
                <div className="cube">
                  <img
                    className="cube__front"
                    src="assets/img/icons/java.png"
                    alt=""
                  />
                  <img
                    className="cube__right"
                    src="assets/img/icons/c.png"
                    alt=""
                  />
                  <img
                    className="cube__back"
                    src="assets/img/icons/HTML5.png"
                    alt=""
                  />
                  <img
                    className="cube__left"
                    src="assets/img/icons/JAVASCRIPT.png"
                    alt=""
                  />
                  <img
                    className="cube__top"
                    src="assets/img/icons/css.png"
                    alt=""
                  />
                  <img
                    className="cube__bottom"
                    src="assets/img/icons/nodejs.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="cube-wrap cube-second">
                <div className="cube">
                  <img
                    className="cube__front"
                    src="assets/img/icons/css.png"
                    alt=""
                  />
                  <img
                    className="cube__right"
                    src="assets/img/icons/REACT.png"
                    alt=""
                  />
                  <img
                    className="cube__back"
                    src="assets/img/icons/ANGULAR.png"
                    alt=""
                  />
                  <img
                    className="cube__left"
                    src="assets/img/icons/nodejs.png"
                    alt=""
                  />
                  <img
                    className="cube__top"
                    src="assets/img/icons/expressjs.png"
                    alt=""
                  />
                  <img
                    className="cube__bottom"
                    src="assets/img/icons/next-js.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="cube-wrap cube-third">
                <div className="cube">
                  <img
                    className="cube__front"
                    src="assets/img/icons/aws.png"
                    alt=""
                  />
                  <img
                    className="cube__right"
                    src="assets/img/icons/jquery.png"
                    alt=""
                  />
                  <img
                    className="cube__back"
                    src="assets/img/icons/d3.svg"
                    alt=""
                  />
                  <img
                    className="cube__left"
                    src="assets/img/icons/mysql.png"
                    alt=""
                  />
                  <img
                    className="cube__top"
                    src="assets/img/icons/GITHUB.png"
                    alt=""
                  />
                  <img
                    className="cube__bottom"
                    src="assets/img/icons/springboot.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
