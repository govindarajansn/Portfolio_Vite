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
          <VerticalTimeline className="text-primary-800">
            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{
                background: "#f5cac3",
                color: "#d9dcd6",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #f5cac3",
              }}
              date="2024 January - present"
              iconStyle={{ background: "#354f52", color: "#354f52" }}
              icon={
                <img
                  src={sapThumbnail}
                  className="img-fluid"
                  alt=""
                  style={{ borderRadius: "50%", background: "#354f52" }}
                />
              }
            >
              <h1
                className="vertical-timeline-element-title text-4xl sm:text-4xl md:text-5xl text-primary-800"
                style={{ fontFamily: "Morganite Black" }}
              >
                SAP America Inc.
              </h1>
              <h4
                className="vertical-timeline-element-subtitle text-primary-800"
                style={{
                  textTransform: "uppercase",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                }}
              >
                Newton Square, PA
              </h4>
              <p
                className="text-primary-800"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                }}
              >
                Tech enthusiast working with various SAP proprietary
                technologies to innovate new products for the SAP Software Asset
                Management Team
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#f5cac3",
                color: "#d9dcd6",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #fff",
              }}
              date="2022 September - present"
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
              <h1
                className="vertical-timeline-element-title text-4xl sm:text-5xl md:text-5xl text-primary-800"
                style={{ fontFamily: "Morganite Black" }}
              >
                Northeastern University
              </h1>
              <h4
                className="vertical-timeline-element-subtitle text-primary-800"
                style={{
                  textTransform: "uppercase",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                }}
              >
                Boston, MA
              </h4>
              <p
                className="text-primary-800"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                }}
              >
                Pasionate Graduate Student, seeking a challenging internship to
                apply my theoretical knowledge and contribute to a dynamic work
                environment
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2020 August - 2022 August"
              contentStyle={{
                background: "#f5cac3",
                color: "#d9dcd6",
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
              <h1
                className="vertical-timeline-element-title text-4xl sm:text-4xl md:text-5xl text-primary-800"
                style={{ fontFamily: "Morganite Black" }}
              >
                Virtusa
              </h1>
              <h4
                className="vertical-timeline-element-subtitle text-primary-800"
                style={{
                  textTransform: "uppercase",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                }}
              >
                Full Stack Developer
              </h4>
              <p
                className="text-primary-800"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                }}
              >
                Proficient full-stack developer with a solid understanding of
                both front-end and back-end technologies. Adept at using modern
                technologies and frameworks to deliver outstanding user
                experiences and meet client requirements
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="June 2020 - August 2020"
              contentStyle={{
                background: "#f5cac3",
                color: "#d9dcd6",
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
              <h1
                className="vertical-timeline-element-title text-4xl sm:text-4xl md:text-5xl text-primary-800"
                style={{ fontFamily: "Morganite Black" }}
              >
                Virtusa
              </h1>
              <h4
                className="vertical-timeline-element-subtitle text-primary-800"
                style={{
                  textTransform: "uppercase",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                }}
              >
                Associate Enginner, Intern
              </h4>
              <p
                className="text-primary-800"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                }}
              >
                Intensive three month of training and gained experience in a
                wide range of web development projects
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2016 August- 2020 April"
              contentStyle={{
                background: "#f5cac3",
                color: "#d9dcd6",
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
              <h1
                className="vertical-timeline-element-title text-4xl sm:text-4xl md:text-5xl text-primary-800"
                style={{ fontFamily: "Morganite Black" }}
              >
                Anna University
              </h1>
              <p
                className="text-primary-800"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                }}
              >
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
