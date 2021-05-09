import React from "react";
import {Link} from "react-router-dom" //Never use "a href". It breaks everything, and it must be in Router.
import "./HMenu.css";

function gtp() {
    window.scrollTo(0,0);
}

function HMenu() {
    return (
    <article className="HMenu">
        <div id="i_menu">
            <Link to="/movie"><span className="c_menu">Movie</span></Link>
        </div>
        <div id="i_gtp" onClick={gtp}>↑</div>
    </article>
    );    
}

export default HMenu;