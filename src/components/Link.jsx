import React from "react"
import ReactGA from 'react-ga'

class Link extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
    return (
        <a target="_blank" href={this.props.url}>
            {this.props.title}
        </a>
    )
  }
}

export default Link 
