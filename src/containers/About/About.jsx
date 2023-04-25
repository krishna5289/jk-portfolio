import React, { useState } from "react";
import { motion } from "framer-motion";
import portfolio from "../../assets/Krishna-DevOps Engineer Actyv.pdf";
import me from "../../assets/krishna.png";
import { urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { AboutData } from "./Aboutdata";

const About = () => {
  const [aboutMe] = useState({});

  // useEffect(() => {
  //   // const aboutsQuery = '*[_type == "abouts"]';
  //   // const aboutMeQuery = `*[_type == "aboutme"][0]{
  //   //   profileImg,
  //   //  description,
  //   //  "resumeUrl": resume.asset -> url
  //   // }`;
  //   // client.fetch(aboutsQuery).then((data) => {
  //   //   setAbouts(data);
  //   // });
  //   // client.fetch(aboutMeQuery).then((data) => {
  //   //   setAboutMe(data);
  //   // });
  // }, []);

  const viewResumeHandler = () => {
    window.open(portfolio, "_blank");
  };

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Design</span>
        <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__about-context app__flex">
        <div className="app__about-img app__flex">
          <div className="app__flex">
            <img
              width={"130px"}
              style={{ marginBottom: "25px" }}
              src={aboutMe.profileImg ? urlFor(aboutMe.profileImg) : me}
              alt="Profile"
            />
          </div>
        </div>
        <div className="app__about-data app__flex">
          <h2 className="head-text">About Me</h2>

          <p className="p-text">
            Hi there, I'm <span>Jaya Krishna</span> Skilled{" "}
            <span>Devops Lead</span> and tech entusiast with proven abilities 
            and success in various implementations. Sound knowledge on the best
            devops practices ranging from CI-CD solutions to the Machine learning 
            implementations on cloud. Come and learn with me with my contact details
            and follow me in my social handles.
            Strongly interested in obtaining a{" "}
            <span>Multi Domain Specialist</span>
            position and the skills I have developed are my weapons to make 
            my vision come true.
          </p>
          <div>
            <button className="portfolio-button" onClick={viewResumeHandler}>
              Resume
            </button>
          </div>
        </div>
      </div>

      <div className="app__profiles">
        {AboutData.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.2, type: "tween" }}
            className="app__profile-item"
            key={about.main + index}
          >
            <img src={about.images} alt={about.main} />
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
              {about.main}
            </h2>
            <h2 className="p-text" style={{ marginTop: "10px" }}>
              {about.description}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
