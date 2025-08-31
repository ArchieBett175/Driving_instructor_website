import React from "react";
import { IPhoneMockup } from "react-device-mockup";

const About = () => {
  return (
    <div>
      <IPhoneMockup
        screenWidth={200}
        hideNavBar={true}
        hideStatusBar={true}
        frameColor="#000000"
      >
        <h1 className="place-self-center mx-auto">Hello world</h1>
      </IPhoneMockup>
    </div>
  );
};

export default About;
