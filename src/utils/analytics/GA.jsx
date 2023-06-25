import ReactGA from "react-ga4";

const GA_Init = () => {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING);
};

export const GA_SetPageView = (pageview) => {
  ReactGA.send({ hitType: "pageview", page: pageview, title: pageview });
};

export const GA_CreateEvent = (payload) => {
  ReactGA.event(payload);
};

export default GA_Init;
