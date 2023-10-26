import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import Cookies from "js-cookie";
const Contact = () => {
  const [utm_id, setUtm_id] = useState();

  useEffect(() => {
    if (Cookies.get("utm")) {
      setUtm_id(Cookies.get("utm"));
    }
  }, []);
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
    title: "/contact",
  });
  
  const [decrement, setdecerement] = useState(0);
  
  const clickHandler = () => {
    setdecerement((e) => e - 1);
    const eventTime = new Date().toISOString();

    
    ReactGA.event({
      category: "Button Click",
      action: "Decrement Click",
      label: utm_id,
      value: "mdkamran7255@gmail.com",
      eventTime: eventTime,
    });
  };
  return (
    <div>
      <h1>Contact</h1>
      <button onClick={clickHandler}>Decermernt: {decrement}</button>
    </div>
  );
};

export default Contact;
