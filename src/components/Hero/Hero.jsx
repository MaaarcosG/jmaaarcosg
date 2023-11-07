import { motion } from "framer-motion";
import "./hero.scss";

const textVariant = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      straggeChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

export const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariant}>MARCOS GUTIERREZ</motion.h2>
          <motion.h1 variants={textVariant}>{`fullstack developed`.toUpperCase()}</motion.h1>
          <motion.div variants={textVariant} className="buttons">
            <motion.button variants={textVariant}>{`Contact Me`.toUpperCase()}</motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={sliderVariant}
          className="slidingTextContainer"
          initial="initial"
          animate="animate"
        >
          {`i love programming`.toUpperCase()}
        </motion.div>
      </div>
    </div>
  );
};
