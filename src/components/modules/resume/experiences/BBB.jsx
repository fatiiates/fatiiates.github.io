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
        {/** BBB */}
        <Company
          prefix="bbb"
          faviconURL="/public/company-icons/bbb.png"
          positionTitle="Software Engineer"
          companyURL="https://www.bursa.bel.tr/"
          companyTitle="BBB"
          title="BBB"
          badges={
            <React.Fragment>
              <span className="chip warning">Onsite</span>
            </React.Fragment>
          }
          description={
            <ul style={{ listStyleType: "disc" }}>
              <li>Provisioned a stable virtualization environment.</li>
              <li>Configured Docker on the machine.</li>
              <li>
                Established GitLab as a collaborative version control system.
              </li>
              <li>Automated software development and deployment processes.</li>
              <li>
                Managed provisioning and maintenance of Moodle and BBB
                platforms.
              </li>
              <li>Actively engaged with the open-source community.</li>
              <li>
                Ensured comprehensive documentation of infrastructure,
                configurations, and processes.
              </li>
            </ul>
          }
        />
      </React.Fragment>
    );
  }
}

export default Tubitak;
