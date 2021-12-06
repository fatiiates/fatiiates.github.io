import React from "react";
 
class Resume extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
        <div className="content">
            {this.props.children}
        </div>
    );
  }
}

export default Resume;
