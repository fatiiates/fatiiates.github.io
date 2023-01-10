import React from "react";
import PropTypes from "prop-types";

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title } = this.props;

    return (
      <React.Fragment>
        <h3 className="title">
          <u>{title.substring(0, 2)}</u>
          {title.substring(2)}
        </h3>
      </React.Fragment>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
