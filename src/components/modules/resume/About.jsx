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
          <p>Hello, I'm just an open source lover.</p>
          <p>Every time open to new adventures.</p>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
