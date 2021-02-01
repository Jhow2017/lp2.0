import React, { useEffect, useState } from "react";
import {Link} from "react-scroll";

import Hamburger from './Hamburger';

import './header.css';

const Header = ({logoUrl, theme, themeToggler}) => {

const [isMobile, SetIsMobile] = useState(window.matchMedia('(max-width: 992px)').matches);

useEffect( () => {
    window.addEventListener('resize', () => { 
        SetIsMobile(window.matchMedia('(max-width: 992px)').matches);
    });
});

const [ menuOpen, setMenuOpen ] = useState(false);


  return (
    <header className="transparent header">
    <div className="container">
        <div className="row">
            <div className="col-md-12 menulist">
            {/* logo begin */}
            <div id="logo" className="header__brand">
                <a href="index.html">
                    <img className="logo w-75" src={logoUrl} alt="" />
                </a>
            </div>
            {/* logo close */}
            {/* small button begin */}
            <div className="header__nav-toggle" onClick={() => {
                setMenuOpen(o => !o);
            }}> <Hamburger/>
        </div>
            {/* small button close */}
            {/* mainmenu begin */}
            <nav id="nav" className={`header__nav ${menuOpen ? '' : 'hidden'}`}>
                <ul id="mainmenu" className="ms-2">
                    
                    <li>
                        <Link to={!isMobile ? 'section-hero' : 'section-hero-mobile'} smooth={true} duration={1000}>
                            Início
                        </Link>
                    </li>

                    <li>
                        <Link to="section-about" smooth={true} duration={1000}>
                            Sobre
                        </Link>
                    </li>

                    <li>
                        <Link to="section-speakers" smooth={true} duration={1000}>
                            Palestrantes
                        </Link>
                    </li>

                    <li>
                        <Link to="section-schedule" smooth={true} duration={1000}>
                            Agenda
                        </Link>
                    </li>

                    <li>
                        <Link to="section-register" smooth={true} duration={1000}>
                            Inscrição
                        </Link>
                    </li>
                    <li>
                        <Link to="section-register" smooth={true} duration={1000}>
                            Inscrição
                        </Link>
                    </li>
                    <li>
                        <div className="toggle-container">
                            <span style={{ color: theme ? "grey" : "yellow" }}>☀︎</span>
                            <span className="toggle">
                                <input
                                    checked={theme}
                                    onChange={() => themeToggler()}
                                    id="checkbox"
                                    className="checkbox"
                                    type="checkbox"
                                />
                                <label htmlFor="checkbox" />
                            </span>
                            <span style={{ color: theme ? "slateblue" : "grey" }}>☾</span>
                        </div>
                    </li>
                    
                </ul>
               
            </nav>
            {/* mainmenu close */}
            </div>
        </div>
    </div>
</header>
  );
}

export default Header;