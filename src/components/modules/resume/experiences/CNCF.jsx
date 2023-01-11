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
            <React.Fragment>
              Cloud Native Buildpacks’ primary function is to turn source code
              into a runnable image and because of that it’s natural for it to
              be used within common CI/CD platform pipelines. In this context, a
              Jenkins Pipeline Plugin has been developed to make the use of
              Buildpacks on Jenkins easier.
            </React.Fragment>
          }
        />
      </React.Fragment>
    );
  }
}

export default Softtech;
