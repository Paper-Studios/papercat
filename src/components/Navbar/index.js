import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faPeopleGroup,
  faGamepad,
  faFeatherPointed,
  faEnvelope,
  faBoxOpen
} from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <div className="navigation-container">
      <header className="top-nav-header">
        <div className="top-nav-large-card">
          <div className="logo-bg">
            <img src={'/assets/logo.png'} className="pc-logo" alt='Paper Cat Logo'/>
          </div>
          <div className="top-nav-socials">
            <h3>Paper Cat Games</h3>
            <div className="socials-icon-container">
              <div className="social-icon discord" />
              <div className="social-icon twitter" />
              <div className="social-icon steam" />
            </div>
          </div>
        </div>
        <nav className="navigation-links">
          <ul>
            <li><NavLink className="nav-desktop-li" to={'/'}>Home</NavLink></li>
            <li><NavLink className="nav-desktop-li" to={'/team'}>Team</NavLink></li>
            <li><NavLink className="nav-desktop-li" to={'/featured'}>Games</NavLink></li>
            <li><NavLink className="nav-desktop-li" to={'/blog'}>Blog</NavLink></li>
            <li><NavLink className="nav-desktop-li" to={'/contact'}>Contact</NavLink></li>
            <li><NavLink className="nav-desktop-li" to={'/presskit'}>Press Kit</NavLink></li>
          </ul>
          <ul className="nav-mobile-ul">
            <li><NavLink className="nav-mobile-li" to={'/'}><FontAwesomeIcon icon={faHouse} /></NavLink></li>
            <li><NavLink className="nav-mobile-li" to={'/team'}><FontAwesomeIcon icon={faPeopleGroup} /></NavLink></li>
            <li><NavLink className="nav-mobile-li" to={'/featured'}><FontAwesomeIcon icon={faGamepad} /></NavLink></li>
            <li><NavLink className="nav-mobile-li" to={'/blog'}><FontAwesomeIcon icon={faFeatherPointed} /></NavLink></li>
            <li><NavLink className="nav-mobile-li" to={'/contact'}><FontAwesomeIcon icon={faEnvelope} /></NavLink></li>
            <li><NavLink className="nav-mobile-li" to={'/presskit'}><FontAwesomeIcon icon={faBoxOpen} /></NavLink></li>
          </ul>
        </nav>
      </header>
      <div className="bot-nav-header">
        <div className="bot-nav-skewed-large-card" />
        <div className="bot-nav-skewed-small-cards">
          <div className="nav-card card-one" />
          <div className="nav-card card-two" />
          <div className="nav-card card-three" />
        </div>
      </div>
    </div>
  );
}
