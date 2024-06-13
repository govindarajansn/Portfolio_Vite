import React from "react";
import { skillsData } from "../Constants/constants";

function Skills() {
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
  return (
    <section id="skills" className="about">
      <div className="container">
        <div className="section-title">
          <h2>Technical Skills</h2>
        </div>
        <div className="display-container row">
          <div className="col-lg-8">
            {skillsData.map((data, index) => (
              <SkillCategory key={index} {...data} />
            ))}
          </div>
          {/* <div className="col-lg-4">
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
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Skills;
