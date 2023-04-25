import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";

import "./Skills.scss";
import { skillDetails } from "./Skillsdata";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState();

  const skillVariants = {
    view: {
      x: [-15, 0],
      opacity: [0, 1],
      transition: {
        x: {
          type: "spring",
          stiffness: "10",
        },
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    hover: {
      y: -7,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      y: -7,
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    // const skillsQuery = '*[_type=="skills"] | order(proficiency desc)';
    // const experienceQuery = '*[_type=="experiences"] | order(year desc)';
    // client.fetch(skillsQuery).then((skillsData) => {
    //   setSkills(skillsData);
    // });
    // client.fetch(experienceQuery).then((experienceData) => {
    //   setExperience(experienceData);
    // });
  }, []);
  return (
    <>
      <h2 className="head-text">
        Skills <span>&</span> Experience
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skillDetails.map((skill, index) => (
            <motion.div
              variants={skillVariants}
              whileInView="view"
              whileHover="hover"
              whileTap="tap"
              className="app__skills-item app__flex"
              key={skill.name + "-" + index}
            >
              <div className="app__flex" style={{ backgroundColor: "#ecf2f6" }}>
                <img src={skill.images} alt={skill.description} />
              </div>
              <p className="p-text">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
