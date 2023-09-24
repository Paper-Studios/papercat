import React from 'react';

function Home() {
  return (
    <div className='Home'>
      <img src={'/assets/header.jpg'} id='headerimg' width='100%' alt='Paper Perjury banner'/>
      <div className='blurb'>
        Solve Crimes, Outsmart Criminals
      </div>
      <div className='home-content'>
        <div className='home-description'>
          <p id='abstract'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p id='release'>
            Coming Early 2024
          </p>
        </div>
        <div className='home-screenshots'>
          <img src='/assets/screenshot1.jpg' height='45%' width='80%' alt='gameplay'/>
          <img src='/assets/screenshot2.jpg' height='45%' width='80%' alt='gameplay'/>
        </div>
      </div>
    </div>
  )
}
export default Home;