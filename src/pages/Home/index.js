import React , {useState, useEffect} from 'react';
import Form from '../../components/Form';
import Player from '../../components/Player';
import {contentContainer, playerContainer, formContainer} from './home.module.scss';

import shuffle from '../../assets/icons/shuffle.svg'
import headline from '../../assets/headline.png'

const Home = () => {
  const players = [1, 2, 3, 4, 5, 6];
  const [playerNumber, setPlayerNumber] = useState(players[Math.floor(Math.random()*players.length)]);

  console.log(playerNumber);

  return (
    <div className={contentContainer}>
      <div className={playerContainer}>
        <Player playerImage={'players/player' + playerNumber + '.png'}/>
        <button onClick={() => setPlayerNumber(players[Math.floor(Math.random()*players.length)])}>
          <img src={shuffle} alt='shuffle-icon'/>
          <span>MUDAR JOGADOR</span>
        </button>
      </div>
      <div className={formContainer}>
        <img src={headline} alt='headline'/>
        <Form/>
      </div>
    </div>
  )
}

export default Home;