import React from "react"
import ReactGA from 'react-ga'

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING)

class Layout extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  
  componentDidMount(){
    ReactGA.pageview("home");
  }

  render() {
    return (
        <div className="content">
            {this.props.children}
        </div>
    )
  }
}

export default Layout
