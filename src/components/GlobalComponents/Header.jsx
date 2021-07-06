import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
    const [showHamMenu, setShowHamMenu] = useState(false);
    const toggleHam = () => {
      setShowHamMenu(!showHamMenu);
    };

    // Disable scroll when the hamburger menu is open
    showHamMenu ? document.body.classList.add('noscroll') : document.body.classList.remove('noscroll');
 
    return (
        <header>
        <nav className="hide_for_mobile desktop-header">
            {/* <img src="styles\images\logo.svg" alt="MANAGE-LOGO" srcset="" className="logo"/> */}
            <h1 className='logo'>Portfolio</h1>
            <ul className="links-container">
                <NavLink to='/' exact 
                activeClassName='activeLink'>
                    <li className='links'>Home</li>
                </NavLink>
                <NavLink to='/blog' exact activeClassName='activeLink'>
                    <li className='links'>Blog</li>
                </NavLink>
                <NavLink to='/projects' exact activeClassName='activeLink'>
                    <li className='links'>Projects</li>
                </NavLink>
            </ul>
            <Link to='/contact'>
            <button className="cta">Contact Me</button>
            </Link>
        </nav>
        
        <nav className="hide_for_desktop mobile-header">
            {/* <img src="styles\images\logo.svg" alt="MANAGE-LOGO" srcset="" className="logo"/> */}
            <h1 className='logo'>Portfolio</h1>
            <button className={!showHamMenu ? 'hamburger hamButton hamOutAnimation' : 'hamburger hamButton hamAnimation'} onClick={toggleHam}>
            <div className="hamLines firstLine"></div>
            <div className="hamLines secondLine"></div>
            <div className="hamLines thirdLine"></div>
            </button>
        </nav>
        <ul className={showHamMenu ? "mobile-links-container hide_mobo_nav mob_nav closed has-fade navOpenAnimation" : "mobile-links-container hide_mobo_nav mob_nav closed has-fade navCloseAnimation"} style={showHamMenu ? {display: 'flex'} : {display: 'none'}} >
                <NavLink to='/' exact 
                activeClassName='activeLink'>
                    <li onClick={toggleHam} className='links'>Home</li>
                </NavLink>
                <NavLink to='/blog' exact activeClassName='activeLink'>
                    <li  onClick={toggleHam} className='links'>Blog</li>
                </NavLink>
                <NavLink to='/projects' exact activeClassName='activeLink'>
                    <li onClick={toggleHam} className='links'>Projects</li>
                </NavLink>
                <Link to='/contact'>
                    <button onClick={toggleHam} className="cta">Contact Me</button>
                </Link>
        </ul>
        </header> 
    )
}


