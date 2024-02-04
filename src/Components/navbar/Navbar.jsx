import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "phosphor-react";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Son Dev
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/hoaison8a1">
            <FacebookLogo size={25} />
          </a>
          <a href="https://www.linkedin.com/feed/">
            <LinkedinLogo size={25} />
          </a>
          <a href="https://www.instagram.com/?hl=en">
            <InstagramLogo size={25} />
          </a>
          <a href="https://github.com/SonBeoDeveloper">
            <GithubLogo size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
