import React from "react";
import Terminal, { ColorMode, LineType } from "react-terminal-ui";
import { GA_CreateEvent } from "@utils/analytics/GA";

import Commands from "./Commands";

class TerminalUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      terminalLineData: [
        { type: LineType.Output, value: "------------------" },
        {
          type: LineType.Output,
          value: "- You are on the /home/fatiiates directory now.",
        },
        {
          type: LineType.Output,
          value: "- Probably you'll need help command.",
        },
        { type: LineType.Output, value: "------------------" },
      ],
      username: "guest",
    };

    this.commands = Commands;
  }

  onKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
    }
  };

  onInput = (terminalInput) => {
    this.setState((state) => {
      var val = [
        {
          type: LineType.Input,
          value: terminalInput,
        },
      ];
      var localInput = terminalInput.trim(" ");
      var inputCommand = localInput.trim(" ").split(" ");
      var firstCommand = inputCommand[0];

      GA_CreateEvent({
        category: "Command",
        action: `'${inputCommand} komutu girildi'`,
        label: "Command_from_CLI",
      });

      if (firstCommand === "clear")
        return {
          terminalLineData: [],
        };

      if (firstCommand === "sudo")
        val.push({
          type: LineType.Output,
          value: `${this.state.username} is not in the sudoers file. This incident will be reported.`,
        });
      else if (firstCommand === "cat") {
        val.push({
          type: LineType.Output,
          value: this.commands["default"],
        });
      } else if (this.commands[localInput] !== undefined) {
        for (const iterator of this.commands[localInput]) {
          if (typeof iterator === "function") {
            iterator();
          } else {
            val.push({
              type: LineType.Output,
              value: iterator,
            });
          }
        }
      } else {
        val.push({
          type: LineType.Output,
          value: this.commands["default"],
        });
      }

      return {
        terminalLineData: [...state.terminalLineData, ...val],
      };
    });
  };

  render() {
    return (
      <div className="container" onKeyDown={this.onKeyDown}>
        <Terminal
          name="tati@fatiiates"
          colorMode={ColorMode.Dark}
          lineData={this.state.terminalLineData}
          onInput={this.onInput}
        />
      </div>
    );
  }
}

export default TerminalUI;
