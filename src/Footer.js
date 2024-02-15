import React from "react";
import Instagram from "./images/Instagram Icon.png"
import Github from "./images/GitHub Icon.png"

function Footer(){
    return(
        <div id="footer">
            <a href="https://www.instagram.com/meet___kamboj?igsh=ZmpuNHhvNTI1bTVo"><img src={Instagram} alt="Instagram logo"></img></a>
            
            <a href="https://github.com/meetpal0001"><img src={Github} alt="Github logo"></img></a>
            

        </div>
    )
}

export default Footer