import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faCircleDown } from '@fortawesome/free-solid-svg-icons';

export default function Button ({ text, icon, href, className, targetIsBlank, form, type }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  const styles = {
    btn: {
      display: 'flex',
      padding: '5% 10%',
      background: isHovered ? '#4E229C' :'linear-gradient(to bottom, #884CF5, #4E229C)',
      color: isHovered ? '#F5647F' : 'white',
      border: isHovered ? '2px solid #884CF5' : '2px solid #4E229C',
      borderRadius: '3rem 3rem',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '5% 0',
      fontSize: '1.5rem',
      fontFamily: 'Bubblegum Sans, sans-serif',
      cursor: 'pointer',
      filter: 'drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))',
    },
    btnIcon: {
      color: '#F5647F',
      marginRight: '0.75rem',
      fontSize: '1.5rem'
    }
  }

  let iconSymbol;
  switch(icon) {
    case 'send':
      iconSymbol = <FontAwesomeIcon icon={faPaperPlane} style={styles.btnIcon}/>;
      break;
    case 'download':
      iconSymbol = <FontAwesomeIcon icon={faCircleDown} style={styles.btnIcon}/>;
      break;
    case 'steam':
      iconSymbol = <img src='/assets/steamLogo.png' alt='Steam Logo' style={{height: '1rem', width: '1rem'}}/>;
      break;
    default:
      iconSymbol = '';
  }


  return (
    <a
      href={href}
      type={type}
      form={form}
      style={styles.btn}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      target={targetIsBlank ? '_blank' : ''}
      rel={targetIsBlank ? 'noopener noreferrer' : ''}
    >
      {iconSymbol && iconSymbol}
      {text}
    </a>
  )
}
