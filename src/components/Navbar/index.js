import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faPeopleGroup,
  faStar,
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
            <li><a href={'/'}>Home</a></li>
            <li><a href={'/team'}>Team</a></li>
            <li><a href={'/featured'}>Featured</a></li>
            <li><a href={'/blog'}>Blog</a></li>
            <li><a href={'/contact'}>Contact</a></li>
            <li><a href={'/presskit'}>Press Kit</a></li>
          </ul>
          <ul className="nav-mobile-ul">
            <li><a className="nav-mobile-li" href={'/'}><FontAwesomeIcon icon={faHouse} /></a></li>
            <li><a className="nav-mobile-li" href={'/team'}><FontAwesomeIcon icon={faPeopleGroup} /></a></li>
            <li><a className="nav-mobile-li" href={'/featured'}><FontAwesomeIcon icon={faStar} /></a></li>
            <li><a className="nav-mobile-li" href={'/blog'}><FontAwesomeIcon icon={faFeatherPointed} /></a></li>
            <li><a className="nav-mobile-li" href={'/contact'}><FontAwesomeIcon icon={faEnvelope} /></a></li>
            <li><a className="nav-mobile-li" href={'/presskit'}><FontAwesomeIcon icon={faBoxOpen} /></a></li>
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
