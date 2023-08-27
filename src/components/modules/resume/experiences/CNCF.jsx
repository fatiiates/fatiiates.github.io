import React from "react";
import Company from "./Company";

class Softtech extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        {/** CNCF */}
        <Company
          prefix="cncf"
          faviconURL="/public/company-icons/cncf.svg"
          positionTitle="Google Summer of Code '21"
          companyURL="https://www.cncf.io/"
          companyTitle="CNCF"
          title="CNCF"
          badges={
            <React.Fragment>
              <span className="chip secondary">Remote</span>
            </React.Fragment>
          }
          description={
            <ul style={{ listStyleType: "disc" }}>
              <li>
                Developed a Jenkins pipeline plugin from scratch for Buildpacks
                Project.
              </li>
              <li>Collaborated with a mentor to design and implementation.</li>
              <li>
                Integrated the plugin seamlessly with java-buildpack-client.
              </li>
              <li>
                Implemented robust error handling and exception management.
              </li>
              <li>
                Documented the plugin completely for future reference and
                knowledge sharing.
              </li>
              <li>
                Contributed to the open-source community by sharing the Jenkins
                pipeline plugin.
              </li>
            </ul>
          }
        />
      </React.Fragment>
    );
  }
}

export default Softtech;
