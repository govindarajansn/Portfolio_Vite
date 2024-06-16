import { m, LazyMotion, domAnimation } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HeroText = () => {
  const name = "SNE ?";

  return (
    <div
      className="noselect w-fit h-fit text-grayscale-50 absolute z-10 flex flex-col justify-center items-center rounded-[50%]"
      id="repulse-div"
    >
      <LazyMotion features={domAnimation} strict>
        <m.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center flex justify-center items-center flex-col opacity-100 text-7xl sm:text-9xl cursor-default"
          style={{ fontFamily: "SuperMario" }}
        >
          <m.span
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            Who's{" "}
          </m.span>
          <m.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            {name.split("").map((char, index) => {
              if (char === " ") {
                return " ";
              }
              return (
                <span
                  key={index}
                  className="text-primary-400 bounce"
                  style={{ fontSize: "1.2em" }}
                >
                  {char}
                </span>
              );
            })}
          </m.div>
        </m.h1>
      </LazyMotion>
      <div className="social-links">
        <a href="https://github.com/govindarajansn">
          <FaGithub className="social-icons text-primary-500 bounce" />
        </a>
        <a href="mailto:govindarajan.sn@northeastern.edu">
          <MdEmail className="social-icons text-primary-500 bounce" />
        </a>
        <a href="https://www.linkedin.com/in/sneha-govindarajan/">
          <FaLinkedin className="social-icons text-primary-500 bounce" />
        </a>
      </div>
    </div>
  );
};

export default HeroText;
