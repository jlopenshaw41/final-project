import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter, faInstagram, faGithub  } from "@fortawesome/free-brands-svg-icons";

const Footercontainer = styled.div`
    margin-top: 1rem;
    padding: 1rem;
    background-color: #F5F7F3;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  `;

  const Flexrow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  margin-left: 50px;
  `;


const Flexsocialmedia = styled.div`
    text-align: right;
    width: 100%;
    `;

const Flexsocialmediaicon = styled.div`
    margin: 0 1rem;
    transition: transform 250ms;
    display: inline-block;

    &:hover {
        color: #F5F7F3;
    }
    `;

const Footer = () => (
  <Footercontainer>
      <Flexrow>
        <Flexsocialmedia size={12}>
          <Flexsocialmediaicon>
            <a href="https://www.youtube.com" className="youtube social"><FontAwesomeIcon icon={faYoutube} size="2x" color="#36AB9C" /></a>
        </Flexsocialmediaicon>
        <Flexsocialmediaicon>
            <a href="https://www.facebook.com" className="facebook social"><FontAwesomeIcon icon={faFacebook} size="2x" color="#36AB9C" /></a>
        </Flexsocialmediaicon>
        <Flexsocialmediaicon>
            <a href="https://www.twitter.com" className="twitter social"><FontAwesomeIcon icon={faTwitter} size="2x" color="#36AB9C" /></a>
        </Flexsocialmediaicon>
        <Flexsocialmediaicon>
            <a href="https://www.instagram.com" className="instagram social"><FontAwesomeIcon icon={faInstagram} size="2x" color="#36AB9C" /></a>
        </Flexsocialmediaicon>
        <Flexsocialmediaicon>
            <a href="https://www.github.com" className="github social"><FontAwesomeIcon icon={faGithub} size="2x" color="#36AB9C" /></a>
        </Flexsocialmediaicon>
        </Flexsocialmedia>
      </Flexrow>
  </Footercontainer>
);

export default Footer;