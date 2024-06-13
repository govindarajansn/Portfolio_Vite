// import React from "react";
// import { skillsData } from "../Constants/constants";
// import SectionTitle from "../Components/SectionTitle";
// import SkillsCards from "../Components/SkillsCards";
// import MarqueeCards from "../Components/MarqueeCards";
// const Skills = () => {
//   return (
//     <div id="skills" className="w-full overflow-hidden-web flex justify-center">
//       <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
//         <div className="w-full">
//           <SectionTitle title="SKILLS" subtitle="WHAT I DO" />
//         </div>
//         <div className="xl:border-l-2 xl:border-r-2 xl:border-primary-400 h-full">
//           <div className="relative">
//             <div className="absolute top-[45px] w-full h-[1px] bg-primary-400"></div>
//             <MarqueeCards direction="left">
//               <SkillsCards />
//             </MarqueeCards>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;
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
            <h3 className="skill-heading">{category.category}</h3>
            <SkillsCards skills={category.skills} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

// const SkillItem = ({ name, src, background }) => (
//   <div className="skill-icons">
//     <img
//       src={src}
//       alt={name}
//       className="img-fluid"
//       style={{
//         height: "40px",
//         width: "40px",
//         background: background || "transparent",
//       }}
//     />
//     <p>{name}</p>
//   </div>
// );

// const SkillCategory = ({ category, skills }) => (
//   <>
//     <h2 className="skill-heading">{category}</h2>
//     <div className="skill-container">
//       {skills.map((skill, index) => (
//         <SkillItem key={index} {...skill} />
//       ))}
//     </div>
//   </>
// );

// function Skills() {
//   return (
//     <div id="skills" className="w-full overflow-hidden-web flex justify-center">
//       <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
//         <div className="w-full">
//           <SectionTitle title="SKILLS" subtitle="WHAT I DO" />
//         </div>
//         <div className="display-container row">
//           <div className="col-lg-8">
//             {skillsData.map((data, index) => (
//               <SkillCategory key={index} {...data} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Skills;
