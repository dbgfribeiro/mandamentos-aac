import React from 'react'
import {playerContainer} from './player.module.scss';

import player1 from '../../assets/players/jogador1.png'

const Player = () => {
  return (
    <div className={playerContainer}>
      <img src={player1} alt='player-portrair'/>
    </div>
  )
}

export default Player;
