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
            <div>
              <span className="chip secondary">Remote</span>
              <span className="chip secondary animate-fade">Currently</span>
            </div>
          }
          description={
            <ul style={{ listStyleType: "disc" }}>
              <li>
                🐞 Problem Solver: Expert in issue resolution and bug fixing.
              </li>
              <li>
                🔄 Code Refiner: Skilled in refactoring code for optimal
                performance.
              </li>
              <li>
                ⚙️ Agile Advocate: Proficient in Agile methodologies,
                particularly Scrum.
              </li>
              <li>
                🚀 Solution Proposer: Swiftly offers problem-solving
                suggestions.
              </li>
              <li>
                🏛️ Architectural Visionary: Shapes innovative architectural
                concepts.
              </li>
              <li>
                🌐 Web API Maestro: Designs, develops, and maintains Go-based
                Web APIs.
              </li>
              <li>
                ☁️ Cloud Orchestrator: Manages Azure DevOps CI/CD and AWS
                operations.
              </li>
              <li>
                🔍 Insightful Monitoring: Establishes robust logging and
                monitoring systems.
              </li>
              <li>
                📞 Zoom Integration: Seamlessly integrates Zoom via OAuth 2.0
                into Ticketolia.
              </li>
              <li>
                🤝 Collaborative Innovator: Contributes novel architectural
                concepts.
              </li>
            </ul>
          }
        />
      </React.Fragment>
    );
  }
}

export default Softtech;
