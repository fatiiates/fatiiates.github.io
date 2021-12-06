import React from "react";
import Terminal, { ColorMode, LineType } from 'react-terminal-ui';
 
class TerminalUI extends React.Component {
  constructor() {
    super();
    this.state = { 
      terminalLineData: [
        {type: LineType.Output, value: '==================Info START=================='},
        {type: LineType.Output, value: '- You are on the /home/fatiiates directory now.'},
        {type: LineType.Output, value: '- Contact me, if you can.'},
        {type: LineType.Output, value: '- Probably you\'ll need help command.'},
        {type: LineType.Output, value: '===================Info END==================='},
      ]
    };
  }

  commands = {
    'help': ['Hmm, someone needs help :)'],
    'ls' : ['linkedin instagram resume_en resume_tr '],
    'default': ['Unrecognized command, please use help command!'],
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
           
          val.push( {
            type: LineType.Output,
            value: iterator
          })
        }
  
      }else {
        val.push( {
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
          colorMode={ ColorMode.Dark }  
          lineData={ this.state.terminalLineData } 
 
          onInput={this.onInput}
        />
      </div>
    )
  }
}

export default TerminalUI;