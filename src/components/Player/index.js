import React from 'react'
import PropTypes from 'prop-types'; 
import {playerContainer} from './player.module.scss';

const Player = ({ playerImage }) => {
  return (
    <div className={playerContainer}>
      <img src={playerImage} alt='player-portrait'/>
    </div>
  )
}

export default Player;

Player.propTypes = {
  playerImage: PropTypes.string,
};
