import React from "react";
import About from "./About";
import Experience from "./Experiences";
import Education from "./Education";

class Resume extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="info-wrapper">
        <About />
        <Experience />
        <Education />
      </div>
    );
  }
}

export default Resume;
