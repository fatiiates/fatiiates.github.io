import React from "react";
import Terminal, { ColorMode, LineType } from 'react-terminal-ui';

class TerminalUI extends React.Component {
  constructor() {
    super();
    this.state = {
      terminalLineData: [
        { type: LineType.Output, value: '==================Info START==================' },
        { type: LineType.Output, value: '- You are on the /home/fatiiates directory now.' },
        { type: LineType.Output, value: '- Probably you\'ll need help command.' },
        { type: LineType.Output, value: '===================Info END===================' },
      ]
    };
  }

  informantions = {
    linkedin: "https://www.linkedin.com/in/fatiiates/",
    resume_en: process.env.PUBLIC_URL + "/doc/resume_en.pdf",
    resume_tr: process.env.PUBLIC_URL + "/doc/resume_tr.pdf"
  }

  openLink = (url, title) => {
    return [
      <a target="_blank" href={url}>fatiiates</a>,
      () => {
        window.open(url)
      }
    ]
  }

  commands = {
    'help': ['Hmm, someone needs help :)'],
    'ls': ['linkedin resume_en tr_ozgecmis '],
    'l': [
      <table>
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
          <tr align="left">
            <th>linkedin</th>
            <th>_blank</th>
            <th><a target="_blank" href={this.informantions.linkedin}>@fatiiates</a></th>
          </tr>
          <tr align="left">
            <th>resume_en</th>
            <th>_blank</th>
            <th><a target="_blank" href={this.informantions.resume_en}>@resume_en</a></th>
          </tr>
          <tr align="left">
            <th>resume_tr</th>
            <th>_blank</th>
            <th><a target="_blank" href={this.informantions.resume_tr}>@resume_tr</a></th>
          </tr>
        </tbody>
      </table>,
    ],
    'default': ['Unrecognized command, please use help command!'],
    'linkedin': this.openLink(this.informantions.linkedin, "linkedin:fatiiates"),
    'resume_en': this.openLink(this.informantions.resume_en,"resume_en"),
    'resume_tr': this.openLink(this.informantions.resume_tr, "resume_tr"),
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
      <div className="container">
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