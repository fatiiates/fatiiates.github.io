import React from "react";
import Terminal, { ColorMode, LineType } from 'react-terminal-ui';
import informations from './Informations'
import visibleFiles from './VisibleFiles'
import hiddenFiles from './HiddenFiles'

class TerminalUI extends React.Component {
  constructor() {
    super();
    this.state = {
      terminalLineData: [
        { type: LineType.Output, value: '==================Info START===================' },
        { type: LineType.Output, value: '- You are on the /home/fatiiates directory now.' },
        { type: LineType.Output, value: '- Probably you\'ll need help command.' },
        { type: LineType.Output, value: '===================Info END====================' },
      ]
    };
  }

  openLink = (url, title) => {
    return [
      <a target="_blank" rel="noreferrer" href={url}>fatiiates</a>,
      () => {
        window.open(url)
      }
    ]
  }

  commands = {
    'help': ['Hmm, someone needs help :)'],
    'ls': ['linkedin resume_en tr_ozgecmis '],
    'ls -l': [
      <React.Fragment>
        <table style={{marginTop: -30}}>
          <thead>
            <tr align="left">
              <th style={{paddingRight: 100}}>title</th>
              <th style={{paddingRight: 50}}>target</th>
              <th style={{paddingRight: 50}}>anchor</th>
            </tr>
          </thead>
          <tbody>
            <tr align="left">
              <th>-----</th>
              <th>------</th>
              <th>------</th>
            </tr>
            {visibleFiles}
          </tbody>
        </table>
      </React.Fragment>,
    ],
    'ls -al': [
      <React.Fragment>
        <table style={{marginTop: -30}}>
          <thead>
            <tr align="left">
              <th style={{paddingRight: 100}}>title</th>
              <th style={{paddingRight: 50}}>target</th>
              <th style={{paddingRight: 50}}>anchor</th>
            </tr>
          </thead>
          <tbody>
            <tr align="left">
              <th>-----</th>
              <th>------</th>
              <th>------</th>
            </tr>
            {hiddenFiles}
            {visibleFiles}
          </tbody>
        </table>
      </React.Fragment>,
    ],
    'default': ['Unrecognized command, please use help command!'],
    'linkedin': this.openLink(informations.linkedin, "linkedin:fatiiates"),
    'resume_en': this.openLink(informations.resume_en,"resume_en"),
    'resume_tr': this.openLink(informations.resume_tr, "resume_tr"),
  }

  onKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault()
      console.log("Tab")
    }
  }

  onInput = (terminalInput) => {
    this.setState(state => {
      var val = [
        {
          type: LineType.Input,
          value: terminalInput
        }
      ]

      var inputCommand = terminalInput.split(" ")
      var firstCommand = inputCommand[0]

      if (firstCommand === 'clear')
        return {
          terminalLineData: []
        }

      if (firstCommand === "cat") {
        val.push({
          type: LineType.Output,
          value: this.commands['default']
        })
      } else if (this.commands[terminalInput] !== undefined) {

        for (const iterator of this.commands[terminalInput]) {
          if (typeof iterator == 'function') {
            iterator()
          } else {
            val.push({
              type: LineType.Output,
              value: iterator
            })
          }
        }

      } else {
        val.push({
          type: LineType.Output,
          value: this.commands['default']
        })
      }

      return {
        terminalLineData: [...state.terminalLineData, ...val]
      }

    })
  }

  render() {
    return (
      <div 
        className="container"
        onKeyDown={this.onKeyDown}
      >
        <Terminal
          name='tati@fatiiates'
          colorMode={ColorMode.Dark}
          lineData={this.state.terminalLineData}
          onInput={this.onInput}
        />
      </div>
    )
  }
}

export default TerminalUI;