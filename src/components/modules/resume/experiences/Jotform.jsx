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
        {/** Jotform */}
        <Company
          prefix="jotform"
          faviconURL="/public/company-icons/jotform.ico"
          positionTitle="Software Engineer Intern"
          companyURL="https://www.jotform.com/"
          companyTitle="Jotform"
          title="Jotform"
          badges={
            <React.Fragment>
              <span className="chip secondary">Remote</span>
            </React.Fragment>
          }
          description={
            <React.Fragment>
              Prevented the purchase of external SEO applications by developing
              a web-based SEO application.
            </React.Fragment>
          }
        />
      </React.Fragment>
    );
  }
}

export default Softtech;
