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
            className="card w-[110px] h-[90px] flex flex-col items-center bg-primary-700 rounded-xl border-4 border-primary-500 cursor-pointer m-2"
          >
            <div className="w-full h-[60px] flex items-center p-1 flex-col">
              <span
                className="text-xl text-primary-800"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                {skill.name}
              </span>
              <img
                className="h-[50px] flex justify-center items-center w-[50px] bg-primary-700 rounded-[50%] p-1 object-contain"
                src={skill.src}
                alt={skill.name}
              />
            </div>
          </m.div>
        ))}
      </LazyMotion>
    </div>
  );
};

export default SkillsCards;
