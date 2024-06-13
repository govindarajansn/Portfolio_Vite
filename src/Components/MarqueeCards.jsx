import Marquee from "react-fast-marquee";

const MarqueeCards = ({ children, direction }) => {
  return (
    <Marquee
      direction={direction}
      gradient={false}
      speed={70}
      pauseOnHover={false}
    >
      {children}
    </Marquee>
  );
};

export default MarqueeCards;
