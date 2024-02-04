import React, { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          i focus on helping
          <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img
            src="https://th.bing.com/th/id/OIP.lGXJWrrJAfjC98Bxt5sDLwHaEN?rs=1&pid=ImgDetMain"
            alt=""
          />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Several </motion.b>
            possibilities
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For your </motion.b>
            Business
          </h1>
          <button>What i do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>UI/UX designer & Photography</h2>
          <p>
            I am a UI/UX designer with experience using Figma to create unique
            and engaging user interfaces. Additionally, I have the ability to
            take professional photographs, using techniques and creative skills
            to capture beautiful and profound moments.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web & App developer</h2>
          <p>
            I am a web & app developer with experience using ReactJS,React
            Native, NodeJS, Redux, and Socket.IO to develop cross-platform web
            applications with flexibility and high performance. The combination
            of these technologies helps me build interactive web experiences
            that meet users needs effectively.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Product Management</h2>
          <p>
            I am a dedicated Product Manager with a passion for developing
            innovative products that resonate with users. Leveraging my
            strategic mindset and analytical skills, I excel in leading
            cross-functional teams to deliver impactful solutions that drive
            business growth and customer satisfaction.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>IT Business Analyst</h2>
          <p>
            I am an IT Business Analyst with a strong ability to analyze
            business requirements and translate them into effective technical
            solutions. My expertise lies in bridging the gap between business
            stakeholders and IT teams to ensure successful project outcomes.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
