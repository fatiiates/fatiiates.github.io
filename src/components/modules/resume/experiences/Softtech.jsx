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
        {/** SOFTTECH */}
        <Company
          prefix="softtech"
          faviconURL="/public/company-icons/softtech.png"
          positionTitle="Software Engineer"
          companyURL="https://softtech.com.tr/"
          companyTitle="Softtech"
          title="Softtech"
          badges={
            <React.Fragment>
              <span className="chip secondary">Remote</span>
              <span className="chip danger animate-fade">Currently</span>
            </React.Fragment>
          }
          description={
            <React.Fragment>
              We are developing a NFT ticket issuing application. I am in the
              team that designing and developing the server-side of this
              service.
            </React.Fragment>
          }
        />
      </React.Fragment>
    );
  }
}

export default Softtech;
