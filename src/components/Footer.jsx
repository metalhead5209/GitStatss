import React from "react";
import styled from "styled-components";
import { FooterWrapper } from "../Wrappers";
import PortIcon from '../assets/briefcase.png';
import TwitIcon from '../assets/twitter.svg';
import GitIcon from '../assets/github.svg';
import LinkedinIcon from '../assets/linkedin.svg';

const Footer = () => {
  return (
    <FooterWrapper>
      <h1>GitStatss</h1>
      <p>&copy; 2022 By Aaron Rodi</p>
      <div className="social-icon">
              <a href="https://github.com/metalhead5209" target="_blank">
                <img src={GitIcon} alt="github" className="soc-icon" />
              </a>
              <a href="https://www.linkedin.com/in/aaron-rodi/" target="_blank">
                <img src={LinkedinIcon} alt="linkedin" className="soc-icon" />
              </a>
              <a href="https://twitter.com/a_wodi_" target="_blank">
                <img src={TwitIcon} alt="twitter" className="soc-icon" />
              </a>
              <a href="https://aaron-rodi.netlify.app/" target="_blank">
                <img src={PortIcon} alt="portfolio" className="soc-icon" />
              </a>
            </div>
    </FooterWrapper>
  );
};

export default Footer;
