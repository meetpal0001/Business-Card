import React from "react";
import Profile from "./images/Profile.jpg";
import Mail from "./images/Mail.png";
import LinkedIn from "./images/linkedin.png";

function Header() {
    return (
        <div>
            <img className="profilePic" src={Profile} alt="Profile Picture" />
            <h2>Meetpal Singh</h2>
            <div className="fDev">Frontend Developer</div>
            <div className="webName">meetpalsingh.website</div>
            <div className="buttonFlex">
                <a id="email" href="mailto:singhmeetpal738@gmail.com">
                    <img className="logo" src={Mail} alt="Mail logo"></img>
                    Email
                </a>

                <a id="linkedIn" href="https://www.linkedin.com/in/meetpal-singh-774821241/">
                    <img className="logo" src={LinkedIn} alt="LinkedIn logo"></img>
                    LinkedIn
                </a>

            </div>
        </div>
    )
}

export default Header;