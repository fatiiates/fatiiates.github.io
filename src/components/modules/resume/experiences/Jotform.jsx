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
            <ul style={{ listStyleType: "disc" }}>
              <li>
                Developed a web-based SEO analyzer inspired by popular tools
                like Screaming Frog.
              </li>
              <li>
                Collaborated with a team to design and implement a comprehensive
                website analysis tool.
              </li>
              <li>
                Created a user-friendly web interface for inputting URLs and
                obtaining detailed SEO reports.
              </li>
              <li>
                Implemented crawling and parsing algorithms to analyze website
                content.
              </li>
              <li>Integrated SEO analysis techniques.</li>
              <li>
                Designed and implemented a database and cache-aside caching.
              </li>
              <li>
                Implemented data reporting features for presenting SEO findings.
              </li>
              <li>
                Actively participated in team meetings, code reviews, and
                discussions for improvement.
              </li>
              <li>
                Documented the functionality, features, and usage instructions.
              </li>
            </ul>
          }
        />
      </React.Fragment>
    );
  }
}

export default Softtech;
