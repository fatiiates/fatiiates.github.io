import React from "react"
import Terminal, { ColorMode, LineType } from 'react-terminal-ui'
import ReactGA from 'react-ga'
// import { Scrollbar } from "react-scrollbars-custom";

import informations from './Informations'
import visibleFiles from './VisibleFiles'
import hiddenFiles from './HiddenFiles'
import Link from "./Link"

class TerminalUI extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      terminalLineData: [
        { type: LineType.Output, value: '------------------' },
        { type: LineType.Output, value: '- You are on the /home/fatiiates directory now.' },
        { type: LineType.Output, value: '- Probably you\'ll need help command.' },
        { type: LineType.Output, value: '------------------' },
      ],
      username: 'guest'
    }

    this.commands = {
      'help': [
        <React.Fragment>Hmm, someone needs help :) Anyway, 
          <Link url="https://man7.org/linux/man-pages/man1/ls.1.html" title="click" />.
        </React.Fragment>
      ],
      'pwd': ['/home/fatiiates'],
      'whoami': [this.state.username],
      'ls': ['linkedin resume_en tr_ozgecmis '],
      'sudo su': ['Permission denied.'],
      'sudo su -': ['Permission denied.'],
      'su': ['Permission denied.'],
      'su -': ['Permission denied.'],
      'ls -l': [
        <React.Fragment>
          <table style={{ marginTop: -30 }}>
            <thead>
              <tr align="left">
                <th style={{ paddingRight: 100 }}>title</th>
                <th style={{ paddingRight: 50 }}>target</th>
                <th style={{ paddingRight: 50 }}>anchor</th>
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
          <table style={{ marginTop: -30 }}>
            <thead>
              <tr align="left">
                <th style={{ paddingRight: 100 }}>title</th>
                <th style={{ paddingRight: 50 }}>target</th>
                <th style={{ paddingRight: 50 }}>anchor</th>
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
      'resume_en': this.openLink(informations.resume_en, "resume_en"),
      'resume_tr': this.openLink(informations.resume_tr, "resume_tr"),
    }
  }

  openLink = (url, title) => {

    ReactGA.event({
      category: "Link",
      action: title + ' görüntülendi',
      label: "Link_from_CLI",
    });

    return [
      <a target="_blank" rel="noreferrer" href={url}>{title}</a>,
      () => {
        window.open(url)
      }
    ]
  }

  onKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault()
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
      var localInput = terminalInput.trim(' ')
      var inputCommand = localInput.trim(' ').split(" ")
      var firstCommand = inputCommand[0]
      
      ReactGA.event({
        category: "Command",
        action: `'${inputCommand} komutu girildi'`,
        label: "Command_from_cli",
      });

      if (firstCommand === 'clear')
        return {
          terminalLineData: []
        }

      if (firstCommand == "sudo")
        val.push({
          type: LineType.Output,
          value: `${this.state.username} is not in the sudoers file. This incident will be reported.`
        })
      else if (firstCommand === "cat") {
        val.push({
          type: LineType.Output,
          value: this.commands['default']
        })
      } else if (this.commands[localInput] !== undefined) {

        for (const iterator of this.commands[localInput]) {
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

export default TerminalUI