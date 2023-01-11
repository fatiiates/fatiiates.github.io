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
        {/** Cankaya */}
        <Company
          prefix="cankaya"
          faviconURL="/public/company-icons/cankaya.jpg"
          positionTitle="Software Engineer"
          companyURL="https://cankayaenerji.com/"
          companyTitle="Cankaya Energy"
          title="Cankaya Energy"
          badges={
            <React.Fragment>
              <span className="chip secondary">Remote</span>
            </React.Fragment>
          }
          description={
            <React.Fragment>
              Took on all the tasks from the development of a website to its
                  deployment. This is my first freelance experience.
            </React.Fragment>
          }
        />
      </React.Fragment>
    );
  }
}

export default Softtech;
