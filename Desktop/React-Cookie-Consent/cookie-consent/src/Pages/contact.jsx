import React from 'react'
import ReactGA from "react-ga4"
const Contact = () => {
    ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
        title: "/contact"
      });
  return (
    <div>
      <h1>Contact</h1>
    </div>
  )
}

export default Contact
