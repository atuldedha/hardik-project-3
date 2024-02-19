import React from "react";
// import Logo from "../../images/logo.jpeg";
import Logo from "../../images/new_logo.png";

const AboutSection = () => {
  return (
    <div className="sectionContainer">
      <h1 className="heading">About</h1>

      <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row items-center space-x-0 lg:space-x-12 ">
        <img
          src={Logo}
          alt="logo"
          className="w-56 lg:w-64 object-contain rounded-xl"
        />

        <p className="text-sm text-justify font-poppins font-normal">
          Introducing Amaxa, a visionary organization revolutionizing the way
          connections are made in the online world. With a relentless focus on
          innovation, Amaxa is dedicated to developing multiple groundbreaking
          products that redefine the landscape of online networking. By bringing
          offline processes online and streamlining them, our solutions empower
          individuals to form meaningful connections, fostering collaboration,
          and driving growth across various industries. Through the utilization
          of advanced technologies and user-centric design, Amaxa is paving the
          way for a new era of digital interactions, where people can
          effortlessly connect, collaborate, and thrive in the online space.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
