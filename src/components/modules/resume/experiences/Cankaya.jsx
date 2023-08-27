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
            <ul style={{listStyleType: "disc"}}>
               <li>
                First of all, this was my first freelancer project.
              </li>
              <li>
                Created websites using PHP, HTML, and related technologies.
              </li>
              <li>
                Implemented frontend (HTML, CSS) and basic backend (PHP)
                components.
              </li>
              <li>Developed static web pages and simple user interfaces.</li>
              <li>
                Applied responsive design principles for cross-device
                compatibility.
              </li>
              <li>
                Provided content management functionality for easy updates.
              </li>
              <li>
                Produced functional website without extensive testing or
                complex features.
              </li>
              <li>Documented project details for basic reference.</li>
            </ul>
          }
        />
      </React.Fragment>
    );
  }
}

export default Softtech;
