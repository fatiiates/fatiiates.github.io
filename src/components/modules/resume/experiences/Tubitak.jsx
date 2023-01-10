import React from "react";
import Company from "./Company";

class Tubitak extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        {/** TUBITAK */}
        <Company
          prefix="tubitak"
          faviconURL="/company-icons/tubitak.ico"
          positionTitle="Software Engineer"
          companyURL="https://www.tubitak.gov.tr/en"
          companyTitle="TUBITAK"
          title="TUBITAK"
          badges={
            <React.Fragment>
              <span className="chip primary">Hybrid</span>
            </React.Fragment>
          }
          description={
            <React.Fragment>
              Working as a team lead in the web development team of an
              educational project.
            </React.Fragment>
          }
        />
      </React.Fragment>
    );
  }
}

export default Tubitak;
