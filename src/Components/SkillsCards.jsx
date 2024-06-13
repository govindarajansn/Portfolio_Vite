// import { m, LazyMotion, domAnimation } from "framer-motion";
// import { skills } from "../Constants/constants";

// const SkillsCards = () => {
//   return (
//     <div className="flex">
//       <LazyMotion features={domAnimation} strict>
//         {skills.map((skill, index) => (
//           <m.div
//             initial={{ scale: 0.8 }}
//             animate={{
//               rotate: [0, 10, 0],
//             }}
//             transition={{
//               duration: 1,
//               repeat: Infinity,
//               repeatType: "loop",
//               ease: "linear",
//             }}
//             style={{ zIndex: `${index + 1}`, transition: "all 0.6s" }}
//             key={index}
//             className="card w-[150px] h-[120px] flex flex-col items-center  bg-primary-400 rounded-xl border-4 border-primary-600 cursor-pointer"
//           >
//             <div className="w-full h-[60px] flex items-center gap-2 p-1 flex-col">
//               <img
//                 className="h-[40px] flex justify-center items-center w-[50px]  bg-primary-600 rounded-[50%] p-1 object-contain"
//                 src={skill.icon}
//                 alt={skill.title}
//               />
//               <span
//                 className="text-xl"
//                 style={{
//                   fontFamily: "Poppins, sans-serif",
//                   fontWeight: "bold",
//                 }}
//               >
//                 {skill.title}
//               </span>
//             </div>
//           </m.div>
//         ))}
//       </LazyMotion>
//     </div>
//   );
// };

// export default SkillsCards;

import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";

const SkillsCards = ({ skills }) => {
  return (
    <div className="flex flex-wrap">
      <LazyMotion features={domAnimation} strict>
        {skills.map((skill, index) => (
          <m.div
            initial={{ scale: 0.8 }}
            animate={{
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 1,
              ease: "linear",
            }}
            style={{ zIndex: `${index + 1}`, transition: "all 0.6s" }}
            key={index}
            className="card w-[110px] h-[90px] flex flex-col items-center bg-primary-400 rounded-xl border-4 border-primary-400 cursor-pointer m-2"
          >
            <div className="w-full h-[60px] flex items-center p-1 flex-col">
              <img
                className="h-[50px] flex justify-center items-center w-[50px] bg-primary-600 rounded-[50%] p-1 object-contain"
                src={skill.src}
                alt={skill.name}
              />
              <span
                className="text-xl"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "15px",
                }}
              >
                {skill.name}
              </span>
            </div>
          </m.div>
        ))}
      </LazyMotion>
    </div>
  );
};

export default SkillsCards;
