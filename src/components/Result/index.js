import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';

import {resultModal, resultContainer, social, btnWrapper} from './result.module.scss';

const Result = ({ message , playerId}) => {
  const [poster, setPoster] = useState(null);
  const [posterUrl, setPosterUrl] = useState('');
  const canvas = useRef(null);

  /*download poster*/
  const downloadPoster = () => {
    const link = document.createElement('a');
    var generatedPoster = document.getElementById("posterCanvas"); 
    link.download = 'osmeusmandamentos.png';
    link.href = generatedPoster.toDataURL();
    link.click();
    setPosterUrl(link);
  }
  
  /*generate canvas*/
  useEffect(() => {
    const background = new Image();
    background.src = 'background.jpg';
    background.onload = () => setPoster(background);
  }, [])

  useEffect(() => {
    if(poster && canvas) { 
      const ctx = canvas.current.getContext("2d");
      ctx.drawImage(poster, 0, 0, 950, 500);

      /*Player*/
      const player = new Image();
      player.src = 'players/player' + playerId + '.png';
      player.onload = function(){
        ctx.drawImage(player, 70, 32, 375, 469.16);
      }

      /*Headline*/
      const headline = new Image();
      headline.src = 'headline.png';
      headline.onload = function(){
        ctx.drawImage(headline, 425, 65, 450, 213.64);
      }

      ctx.font = "32px Hanson";
      ctx.fillText(message.toUpperCase(), 475, 300);
    }
  }, [poster, canvas, message])

  return (
    <div className={resultModal}>
      <h1>O TEU RESULTADO: {playerId}</h1>
      <div className={resultContainer}>
        {/* <p>{message}</p> */}
        <canvas 
          id='posterCanvas'
          ref={canvas}
          width={950}
          height={500}
        />
      </div>
      <div className={btnWrapper}>
        <button onClick={downloadPoster}>TRANSFERIR</button>
        <a href='/'>REPETIR</a>
      </div>
    </div>
  )
}

export default Result;

Result.propTypes = {
  message: PropTypes.string,
  playerId: PropTypes.string,
};
