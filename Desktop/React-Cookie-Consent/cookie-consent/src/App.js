import "./App.css";
import { NavLink, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import CookieConsent from "react-cookie-consent";
import { useEffect } from "react";
import Cookies from "js-cookie";
import ReactGA from "react-ga4";
import { v4 as uuidv4 } from "uuid";


const TRACKING_ID = "G-5HP87K5S6F";
ReactGA.initialize([
  {
    trackingId: TRACKING_ID,
    gaOptions: { debug_mode: true },
    gtagOptions: { debug_mode: true },
  },
]);
function App() {
  const gtm_id = process.env.GTM_ID
  console.log(gtm_id, "gtm_id")
  useEffect(() => {
    if (!Cookies.get("utm")) {
      const id = uuidv4().substring(0, 4);
      Cookies.set("utm", id);
    }
  }, []);
  const loadGoogleAnalytics = () => {
    console.log("Google Analytics Activity");
    Cookies.set("Cookies-set", "Hello from Home Page", { expires: 7 });
  };

  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });

  
  return (
    <div className="App">
      
      <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
      <CookieConsent
        enableDeclineButton
        onAccept={loadGoogleAnalytics}
        buttonText="Accept Cookies"
        declineButtonText="Decline"
        buttonStyle={{
          color: "white",
          background: "Green",
          fontSize: "1rem",
          border: "1px solid black",
          borderRadius: "5px",
          width: "9rem",
        }}
        declineButtonStyle={{
          color: "white",
          background: "red",
          fontSize: "1rem",
          border: "1px solid black",
          borderRadius: "5px",
          width: "8rem",
        }}
        style={{
          font: "1.5rem",
          textAlign: "left",
          background: "black",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
        }}
        expires={1}
      >
        This site uses cookies for better user experience
      </CookieConsent>
    </div>
  );
}

export default App;
