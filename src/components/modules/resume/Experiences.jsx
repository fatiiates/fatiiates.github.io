import React from "react";
import Softtech from "./experiences/Softtech";
import Tubitak from "./experiences/Tubitak";
import BBB from "./experiences/BBB";
import CNCF from "./experiences/CNCF";
import Jotform from "./experiences/Jotform";
import Cankaya from "./experiences/Cankaya";
import Title from "./Title";

class Resume extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="experience">
          <Title title="EXPERIENCE"/>
          <div>
            <ul className="dash">
              <Softtech />
              <Tubitak />
              <BBB />
              <CNCF />
              <Jotform />
              <Cankaya />
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Resume;
