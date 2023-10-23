import React from 'react'
import ReactGA from "react-ga4"
const Home = () => {
    ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
        title:"/"
      });
      console.log(window.location.pathname)
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
