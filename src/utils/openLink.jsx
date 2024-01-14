import React from "react";

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
    <a
      target="_blank"
      onClick={track}
      onAuxClick={track}
      rel="noreferrer"
      href={url}
    >
      {title}
    </a>,
    () => {
      window.open(url);
    },
  ];
};

export default openLink;
