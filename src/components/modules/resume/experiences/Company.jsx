import React from "react";
import Link from "../../../common/Link";
import PropTypes from "prop-types";

class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <li className="list">
          <div className="organization-wrapper">
            <img
              className="favicon"
              alt={this.props.prefix + "_favicon"}
              src={this.props.faviconURL}
            />
            <h3>
              {this.props.positionTitle} — {" "}
              <Link
                url={this.props.companyURL}
                title={this.props.companyTitle}
              />
            </h3>
            {this.props.badges}
          </div>
          <div className="indent">{this.props.description}</div>
          <br />
        </li>
      </React.Fragment>
    );
  }
}

Company.propTypes = {
  prefix: PropTypes.string,
  faviconURL: PropTypes.string,
  positionTitle: PropTypes.string,
  companyURL: PropTypes.string,
  companyTitle: PropTypes.string,
  badges: PropTypes.node,
  description: PropTypes.node,
};

export default Company;
