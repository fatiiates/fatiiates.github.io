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
          faviconURL="/public/company-icons/tubitak.ico"
          positionTitle="Software Engineer"
          companyURL="https://www.tubitak.gov.tr/en"
          companyTitle="TUBITAK"
          title="TUBITAK"
          badges={
            <React.Fragment>
              <span className="chip info">Hybrid</span>
            </React.Fragment>
          }
          description={
            <ul style={{ listStyleType: "disc" }}>
              <li>
                Authored a graduate thesis analyzing cheating behaviors among
                students.
              </li>
              <li>Developed a web application interface for users.</li>
              <li>
                Developed a desktop application and a backend service for the
                web application.
              </li>
              <li>
                Managed an Ubuntu server and led a small team for project
                execution.
              </li>
              <li>
                Implemented CI/CD servers for automated software development and
                deployment.
              </li>
              <li>Engaged with open-source communities like Pyright.</li>
              <li>
                Demonstrated strong problem-solving skills and conducted
                thorough testing and debugging.
              </li>
              <li>
                Documented project requirements, design decisions, and
                implementation details.
              </li>
            </ul>
          }
        />
      </React.Fragment>
    );
  }
}

export default Tubitak;
