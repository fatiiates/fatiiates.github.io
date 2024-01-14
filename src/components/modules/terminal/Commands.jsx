import React from "react";

import Link from "@common/Link";
import informations from "@config/Informations";
import visibleFiles from "./VisibleFiles";
import hiddenFiles from "./HiddenFiles";
import openLink from "@utils/openLink";

const Commands = {
  help: [
    <React.Fragment>
      Hmm, someone needs help :) Anyway,
      <Link
        url="https://man7.org/linux/man-pages/man1/ls.1.html"
        title="click"
      />
      .
    </React.Fragment>,
  ],
  pwd: ["/home/fatiiates"],
  whoami: ["guest"],
  ls: ["linkedin resume"],
  "sudo su": ["Permission denied."],
  "sudo su -": ["Permission denied."],
  su: ["Permission denied."],
  "su -": ["Permission denied."],
  "ls -l": [
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
  "ls -al": [
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
  default: ["Unrecognized command, please use help command!"],
  linkedin: openLink(informations.linkedin, "linkedin:fatiiates"),
  resume: openLink(informations.resume, "resume"),
};

const AdditionalCommands = {
  echo: ["Hello, world!"],
  date: [new Date().toLocaleString()],
  cal: ["Sorry, no calendar available."],
  cat: ["Meow! Sorry, no files here."],
  mkdir: ["Permission denied."],
  touch: ["Permission denied."],
  rm: ["Permission denied."],
  history: ["1. ls -l", "2. whoami", "3. echo Hello, world!"],
  clear: ["Terminal cleared."],
  weather: ["Sorry, weather information not available."],
  man: ["Sorry, manual not available."],
  grep: ["Permission denied."],
  find: ["Permission denied."],
  ps: ["No processes running."],
  top: ["Sorry, system resources not available."],
};

// Merge the existing commands with the additional commands
const AllCommands = { ...Commands, ...AdditionalCommands };


export default AllCommands;
