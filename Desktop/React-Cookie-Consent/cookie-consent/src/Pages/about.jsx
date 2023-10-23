import React from 'react'
import ReactGA from 'react-ga4'
const About = () => {
    ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
        title: "/about"
      });
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export default About
