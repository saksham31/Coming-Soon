import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Website
          <br />
          Coming Soon
        </h1>
        <Timer />
        <Optin />
        <Preloader />


      {/* Footer */}

      <footer>
  
      <ul class="footer-links">
      <a href="#"><span class="fa fa-twitter"><FaTwitter /></span></a>
      <a href="https://www.linkedin.com/company/techidolsolutions/mycompany/"><span class="fa fa-linkedin"><FaLinkedin /></span></a>
      <a href="#"><span class="fa fa-facebook"><FaFacebook /></span></a>
      <a href="#"><span class="fa fa-instagram"><FaInstagram /></span></a>
      </ul>
      </footer>

      {/* Footer */}
        
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
