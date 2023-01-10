import React from "react"

class Link extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
    return (
        <a target="_blank" rel="noreferrer" href={this.props.url}>
            {this.props.title}
        </a>
    )
  }
}

export default Link 
