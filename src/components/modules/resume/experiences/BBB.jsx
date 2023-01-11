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
          companyTitle="Bursa Metropolitan Municipality"
          title="Bursa Metropolitan Municipality"
          description={
            <React.Fragment>
              Provided more than 10 services such as MSSQL, .NET Core Web
                  API to the developers in the development environment by
                  establishing a cluster within the municipality.
            </React.Fragment>
          }
        />
      </React.Fragment>
    );
  }
}

export default Tubitak;
