import React from "react";

import Link from "@common/Link";
import informations from "@config/Informations";
import visibleFiles from "./VisibleFiles";
import hiddenFiles from "./HiddenFiles";
import { GA_CreateEvent } from "@utils/analytics/GA";

const openLink = (url, title) => {
  const track = () => {
    GA_CreateEvent({
      category: "Link",
      action: title + " görüntülendi",
      label: "Link_from_CLI",
    });
  };

  return [
    <a target="_blank" onClick={track} onAuxClick={track}rel="noreferrer" href={url}>
      {title}
    </a>,
    () => {
      window.open(url);
    },
  ];
};

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

export default Commands;
