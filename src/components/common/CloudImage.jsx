import React from "react"
 
class CloudImage extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
        <div className="cloud-image" style={{backgroundImage: 'url("/public/img/cloud.jpeg")'}}/>
    )
  }
}

export default CloudImage
