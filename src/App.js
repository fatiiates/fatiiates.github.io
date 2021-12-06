import React from 'react';
import './App.css';

import Layout from './components/Layout';
import TerminalController from './components/Terminal';
import Sidebar from './components/Sidebar';
import Resume from './components/Resume';
import CloudImage from './components/CloudImage';

function App() {
  return (
    <div className="App">
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


export default App;
 
