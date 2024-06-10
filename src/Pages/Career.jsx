import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SectionTitle from "../Components/SectionTitle";
import {
  neuThumbnail,
  virtusaThumbnail,
  sapThumbnail,
  auThumbnail,
} from "../assets/index";

// import 'react-vertical-timeline-component/style.min.css';

function Career() {
  return (
    <div id="career" className="w-full flex justify-center ">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full ">
          <SectionTitle title="CAREER" subtitle="What I have done so far" />
        </div>
        <div>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#fff",
                color: "#000",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #fff",
              }}
              date="2024 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              icon={
                <img
                  src={sapThumbnail}
                  className="img-fluid"
                  alt=""
                  style={{ borderRadius: "50%" }}
                />
              }
            >
              <h3 className="vertical-timeline-element-title">
                SAP America Inc.
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Newton Square, PA
              </h4>
              <p>
                Tech enthusiast working with various SAP proprietary
                technologies to innovate new products for the SAP Software Asset
                Management Team
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#fff",
                color: "#000",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #fff",
              }}
              date="2022 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              icon={
                <img
                  src={neuThumbnail}
                  className="img-fluid"
                  alt=""
                  style={{ borderRadius: "50%" }}
                />
              }
            >
              <h3 className="vertical-timeline-element-title">
                Northeastern University
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
              <p>
                Pasionate Graduate Student, seeking a challenging internship to
                apply my theoretical knowledge and contribute to a dynamic work
                environment
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2020 - 2022"
              contentStyle={{
                background: "#fff",
                color: "#000",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #fff",
              }}
              iconStyle={{
                background: "#fff",
                color: "#fff",
                paddingTop: "16px",
              }}
              // icon={<WorkIcon />}
              icon={
                <img
                  src={virtusaThumbnail}
                  className="img-fluid"
                  alt=""
                  style={{ borderRadius: "50%" }}
                />
              }
            >
              <h3 className="vertical-timeline-element-title">Virtusa</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Full Stack Developer
              </h4>
              <p>
                Proficient full-stack developer with a solid understanding of
                both front-end and back-end technologies. Adept at using modern
                technologies and frameworks to deliver outstanding user
                experiences and meet client requirements
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2020(Jun) - 2020(August)"
              contentStyle={{
                background: "#fff",
                color: "#000",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #fff",
              }}
              iconStyle={{
                background: "#fff",
                color: "#fff",
                paddingTop: "16px",
              }}
              icon={
                <img
                  src={virtusaThumbnail}
                  className="img-fluid"
                  alt=""
                  style={{ borderRadius: "50%" }}
                />
              }
            >
              <h3 className="vertical-timeline-element-title">Virtusa</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Associate Enginner, Intern
              </h4>
              <p>
                Intensive three month of training and gained experience in a
                wide range of web development projects
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2016 - 2020"
              contentStyle={{
                background: "#fff",
                color: "#000",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #fff",
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              // icon={<WorkIcon />}
              icon={
                <img
                  src={auThumbnail}
                  className="img-fluid"
                  alt=""
                  style={{ borderRadius: "50%" }}
                />
              }
            >
              <h3 className="vertical-timeline-element-title">
                Anna University
              </h3>
              <p>
                Completed B.Tech in Information Systems with a comprehensive
                understanding of programming languages, software development
                methodologies, and database management
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default Career;
