import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="personal">
          <h1>
            <u>Fa</u>tih ATES
          </h1>
          <h4>Software Engineer & Site Reliability Engineer</h4>
          <p>
            Hey!I am Fatih <s>Faith</s> who is a software engineering
            enthusiast.
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
