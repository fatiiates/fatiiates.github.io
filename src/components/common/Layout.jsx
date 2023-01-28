import React from "react";

import { GA_SetPageView } from "@utils/analytics/GA";
class Layout extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    GA_SetPageView("home");
  }

  render() {
    return <div className="content">{this.props.children}</div>;
  }
}

export default Layout;
