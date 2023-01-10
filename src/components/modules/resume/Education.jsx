import React from "react";
import Link from "../../common/Link";
import Title from "./Title";

class Education extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="education">
          <Title title="EDUCATION" />
          <div>
            <ul className="dash">
              <li className="list">
                <h3>Bachelor, Computer Engineering, CGPA: 3.82/4.00</h3>
                <div className="organization-wrapper">
                  <img
                    className="favicon"
                    alt="btu_favicon"
                    src="/company-icons/btu.png"
                  />
                  <Link
                    url="https://btu.edu.tr/"
                    title="Bursa Technical University"
                  />
                  , Bursa TR
                </div>
                <div className="indent">
                  <p>- Highest ranked student in the CS department</p>
                  <p>- Third student in the faculty</p>
                </div>
                <br />
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Education;
