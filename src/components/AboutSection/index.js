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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          facilisis mauris urna, sed iaculis nibh elementum quis. Morbi iaculis
          augue nec eros elementum, quis tincidunt urna varius. Cras id posuere
          est. In hac habitasse platea dictumst. Pellentesque id est facilisis,
          cursus mi sit amet, vestibulum erat. Vivamus scelerisque purus ligula,
          at mollis purus lobortis et. Fusce suscipit tempor turpis, in
          fermentum augue ultrices vitae. Donec eget faucibus lectus. Nulla
          pellentesque ipsum orci, finibus finibus lectus mattis placerat. Etiam
          at venenatis lectus, sed efficitur libero. Cras ullamcorper gravida
          sapien, in suscipit dolor porttitor et. Aliquam arcu ante, faucibus
          quis velit sed, ornare pharetra nisl. Sed blandit tortor sed felis
          tempor congue. Cras pellentesque nisl dui, in bibendum sapien
          consectetur rhoncus. Suspendisse rhoncus nisi ac imperdiet malesuada.
          Nam at condimentum neque. Cras ex ipsum, consectetur vitae mattis ac,
          elementum eu quam. Quisque sem est, pulvinar vitae nulla sed, feugiat
          fermentum risus. Phasellus finibus tristique tempus. Ut mollis mattis
          aliquet. Quisque accumsan magna quis suscipit sagittis.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
