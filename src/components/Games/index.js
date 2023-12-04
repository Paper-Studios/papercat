import React, { useState } from 'react';
import GameCard from './GameCard';
import Button from '../Shared/Button';

function Games() {
  const [gameInfo, setGameInfo] = useState({});
  function resetGameInfo (e) {
    if (!e.target.closest('.game-card')) {
      setGameInfo({})
    }
  }
  return (
    <div className="games-page" >
      <div className="games-display-left">
        <h3 style={{margin: '5% 0'}}>We make games!</h3>
        {gameInfo.title &&
          <>
            <div>{gameInfo.title}</div>
            <p>{gameInfo.summary}</p>
            <iframe
              src={gameInfo.embededurl}
              title="Paper Perjury Trailer"
              frameBorder="0"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className=""
            />
            <Button icon={'steam'} text={'Buy on Steam'} href={gameInfo.steamLink} type={'link'}/>
          </>
        }
      </div>
      <div className="games-select-right" onClick={resetGameInfo}>
        <h2 style={{marginBottom: '5%'}}>Current releases:</h2>
        <GameCard setGameInfo={setGameInfo}/>
        <GameCard setGameInfo={setGameInfo}/>
      </div>
    </div>
  )
}
export default Games;