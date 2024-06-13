import { m, LazyMotion, domAnimation, motion } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import { memoji } from "../Constants/constants";
import { introduction, SERVICES } from "../Constants/constants";
import ImageSlider from "../Components/elements/ImageSlider";
import { fadeIn } from "../utils/motion";
import { Tilt } from "react-tilt";

const About = () => {
  // Service Card
  const ServiceCard = ({ index, title, icon }) => {
    return (
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="xs:w-[200px] w-full bg-primary-400 rounded-xl border-4 border-primary-600 cursor-pointer"
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[230px] min-w-[200px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    );
  };

  return (
    <div id="about" className="w-full flex justify-center overflow-hidden-web">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full">
          <SectionTitle title="ABOUT ME" subtitle="Introduction" />
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-row">
          <div className="w-full md:w-[50%] md:h-full flex items-center mt-10">
            <LazyMotion features={domAnimation} strict>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                style={{ fontFamily: "Poppins, sans-serif" }}
                className="text-grayscale-50 p-6 text-center flex flex-col gap-6"
              >
                <span className="text-primary-400">{introduction.text[0]}</span>
                <span>{introduction.text[1]}</span>
                <span>{introduction.text[2]}</span>
                <span>{introduction.text[3]}</span>
              </m.p>
            </LazyMotion>
          </div>
          <div className="w-full md:w-[50%] flex h-full items-center justify-center">
            <div className="w-[80%] lg:w-[50%] h-[300px] sm:h-[350px] flex justify-center items-center">
              <ImageSlider images={memoji.image} />
            </div>
          </div>
        </div>
        {/* Service Card */}
        <div className="mt-20 flex gap-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
