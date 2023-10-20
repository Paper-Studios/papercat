import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindows, faApple } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div className='Home'>
      <div className="banner-container">
        <img src={'/assets/header.jpg'} id='headerimg' width='100%' alt='Paper Perjury banner'/>
        <iframe
            src="https://www.youtube.com/embed/mvKB5AkDQko?si=jSEgbFWovtSaBkjB"
            title="Paper Perjury Trailer"
            frameBorder="0"
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="banner-video"
          />
      </div>
      <div className='blurb'>
        <span>Solve Crimes, Outsmart Criminals</span>
      </div>
      <div className='home-content'>
        <div className='home-description'>
          <p id='abstract'>
            Paper Perjury is an engaging point-and-click detective game available on Steam. Developed by James Acosta and his team, Paper Perjury garnered recognition by winning the Tiny Team Selections award in 2023. In Paper Perjury, players step into the shoes of Justina, a hired police clerk with a knack for discovering the truth. With a total of 5 cases to investigate, players must put their detective skills to the test by interviewing suspects and collecting evidence. The game's pixel art style adds a charming and nostalgic touch, making Paper Perjury a must-play for fans of classic detective adventures like Ace Attorney.
          </p>
          <div className='blurb release'>
            <span>Coming Early 2024</span>
          </div>
          <div className='steam-container'>
            <div className='steam-title'>
              <h4>Paper Perjury<span> on Steam</span></h4>
              <img src='/assets/steamLogo.png' alt='steam logo'/>
            </div>
            <div className='steam-info'>
              <img src='/assets/main.jpg' alt='steam banner' />
              <p>
                It all started with a simple robbery. When that thread was pulled, a tapestry of mysteries was revealed. Solve cases and outsmart criminals in a detective story full or lies, confessions, and maybe even a murder or two.
              </p>
            </div>
            <div className='steam-platform-icons'>
              <img src='/assets/tinyTeam.png' width='5%' alt='Tiny Team Award' />
              <FontAwesomeIcon icon={faWindows} className='windows'/>
              <FontAwesomeIcon icon={faApple} className='windows'/>
            </div>
            <div className='steam-buttons'>
              <div className='steam-button-left'>
                <span>Coming 2024</span>
              </div>
              <a href='https://store.steampowered.com/app/1919600/Paper_Perjury/' target='blank' className='steam-button-right'>Add to your wishlist</a>
            </div>
          </div>
        </div>
        <div className='home-screenshots'>
          <img src='/assets/screenshot1.jpg' alt='gameplay'/>
          <img src='/assets/screenshot2.jpg' alt='gameplay'/>
        </div>
      </div>
    </div>
  )
}
export default Home;