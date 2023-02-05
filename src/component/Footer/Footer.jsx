import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";
function Footer() {
  return (
    <footer>
      <div className="footer_items">
        <h4>Get in touch</h4>
        <div className="socialMedia">
          <Tooltip  title="Instagram" arrow>
            <div className="icon__card">
              <InstagramIcon />
            </div>
          </Tooltip>
          <Tooltip title="Linkedin" arrow>
            <div className="icon__card">
              <LinkedInIcon />
            </div>
          </Tooltip>
          <Tooltip  title="Github" arrow>
            <div className="icon__card">
              <GitHubIcon />
            </div>
          </Tooltip>
        </div>
        <p>Copyright @2022</p>
      </div>
    </footer>
  );
}

export default Footer;
