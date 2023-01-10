import React from 'react'
import './App.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner"

import Layout from './components/common/Layout'
import TerminalController from './components/modules/terminal/Terminal'
import Sidebar from './components/common/Sidebar'
import Resume from './components/modules/resume/Resume'
import CloudImage from './components/common/CloudImage'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loader: true
    }
    this.handleLoad = this.handleLoad.bind(this)
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad)
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.handleLoad)
  }

  handleLoad() {
    setTimeout(() => {
      this.setState({ loader: false })
    }, 500)
  }

  render() {
    return (
      <div className="App">
          <Loader
            type="BallTriangle"
            color="#00BFFF"
            className="loader"
            height={100}
            width={100}
            timeout={500}
          />
          <Sidebar />
          <Layout>
            <Resume />
            <div className="terminal-wrapper">
              <TerminalController />
              <CloudImage />
            </div>
          </Layout>
      </div>

    )
  }
}



export default App

