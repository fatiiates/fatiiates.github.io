import React from 'react';
import './App.css';

import Layout from './components/Layout';
import TerminalController from './components/Terminal';
import Sidebar from './components/Sidebar';
import Resume from './components/Resume';
import CloudImage from './components/CloudImage';


class App extends React.Component {
  constructor(props) {
      super(props);
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
      this.setState({loader: false})
    }, 500);
  }

  render(){
    return (
      <div className="App">
        <Loader
          type="BallTriangle"
          color="#00BFFF"
          className="loader"
          height={100}
          width={100}
          timeout={750}
        />
        <Sidebar/>
        <Layout>
           <Resume/>
            <div className="terminal-wrapper">
              <TerminalController/>
              <CloudImage/>
            </div>
         </Layout>
       </div>
    );
  }
}


export default App;
 
