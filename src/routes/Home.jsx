import React from "react";

import Layout from "@common/Layout";
import TerminalController from "@modules/terminal/Terminal";
import Sidebar from "@common/Sidebar";
import Resume from "@modules/resume/Resume";
import CloudImage from "@common/CloudImage";

class Home extends React.Component {
  render() {
    console.log("Home");
    return (
      <React.Fragment>
        <Sidebar />
        <Layout>
          <Resume />
          <div className="terminal-wrapper">
            <TerminalController />
            <CloudImage />
          </div>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Home;
