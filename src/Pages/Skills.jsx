import React from "react";
import { skillsData } from "../Constants/constants";
import SectionTitle from "../Components/SectionTitle";
import SkillsCards from "../Components/SkillsCards";

const Skills = () => {
  return (
    <div id="skills" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
        <div className="w-full">
          <SectionTitle title="SKILLS" subtitle="WHAT I DO" />
        </div>

        {skillsData.map((category, index) => (
          <div key={index} className="relative my-4">
            <h3
              className="skill-heading"
              style={{
                textTransform: "uppercase",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "500",
              }}
            >
              {category.category}
            </h3>
            <SkillsCards skills={category.skills} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
