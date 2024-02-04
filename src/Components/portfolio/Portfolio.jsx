import React, { useRef } from "react";
import "./portfolio.scss";
import chatApp from "../../assets/chat-app.png";
import food from "../../assets/food-delivery.png";
import admin from "../../assets/admin-dashboard.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "Messenger clone ",
    img: chatApp,
    desc: "I developed a Messenger clone application with real-time messaging capabilities using ReactJS, Redux, Socket.IO, and NodeJS. The intuitive user interface and robust backend system ensure seamless communication and secure user authentication.",
  },
  {
    id: 2,
    title: "Food delivery",
    img: food,
    desc: "Utilize ReactJS and React Native to design the dashboard interface and user food interface, construct the backend with NodeJS, Express, and employ MongoDB as the database.",
  },
  {
    id: 3,
    title: "Admin dashboard",
    img: admin,
    desc: "Utilize the MERN stack to design the dashboard and employ the Redux library for state management, along with Nivo for chart designing.",
  },
  {
    id: 4,
    title: "react Commecer",
    img: "https://file.vfo.vn/hinh/2015/12/hinh-nen-nhung-ngon-nui-dep.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias perspiciatis fuga neque, veritatis eaque eum obcaecati alias explicabo sint id dolores consequuntur laborum et tenetur ullam corporis est minima ratione.",
  },
];
const SingleItem = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-1000, 1000]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="porfolio">
      <div className="progress">
        <h1>Featured works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>

      {items.map((item) => (
        <SingleItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
