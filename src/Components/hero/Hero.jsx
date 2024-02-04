import { MouseSimple } from "phosphor-react";
import React from "react";
import SonImage from "../../assets/file.png";
import "./Hero.scss";
import { motion } from "framer-motion";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
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
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <motion.div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>NGUYỄN HOÀI SƠN</motion.h2>
          <motion.h1 variants={textVariants}>Web and app developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See the Lastest works
            </motion.button>
            <motion.button variants={textVariants}>Contact me</motion.button>
          </motion.div>
          <motion.div variants={textVariants} animate="scrollButton">
            <MouseSimple size={50} />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Chủ động, sáng tạo và cam kết đem lại giá trị trong mọi dự án và thách
        thức mà tôi gặp phải.
      </motion.div>
      <div className="imageContainer">
        <img src={SonImage} alt="Son" height="800px" />
      </div>
    </div>
  );
};

export default Hero;
