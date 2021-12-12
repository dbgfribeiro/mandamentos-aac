import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';

import {resultModal, resultContainer, btnWrapper} from './result.module.scss';

const Result = ({ message , playerId }) => {
  const [poster, setPoster] = useState(null);
  const [togglePoster, setTogglePoster] = useState(false);
  const canvas = useRef(null);

  const toggle = () => {
    setTogglePoster(!togglePoster);
  }

  /*download poster*/
  const downloadPoster = () => {
    const link = document.createElement('a');
    var generatedPoster = document.getElementById("posterCanvas"); 
    link.download = 'osmeusmandamentos.png';
    link.href = generatedPoster.toDataURL();
    link.click();
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
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(poster, 0, 0, 950, 500);

      const player = new Image();
      const gold = new Image();
      const headline = new Image();
      player.src = 'players/player' + playerId + '.png';
      gold.src = 'dourado.png';
      headline.src = 'headline.svg';
      

      var maxWidth = 380;
      var lineHeight = 32;
      var x = 475;
      var y = 310;
      var words = message.split(' ');
      var line = '';
      headline.onload = function(){
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(player, 70, 32, 375, 469.16);
        ctx.drawImage(gold, 430, 200, 475, 74.9);
        ctx.drawImage(headline, 485, 75, 350, 173.61);

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = ctx.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            // ctx.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
          ctx.font = "26px Hanson";
          ctx.imageSmoothingEnabled = true;
          ctx.fillText(line.toUpperCase(), x, y);
        }
      }
    }
  }, [poster, canvas, message])

  console.log(togglePoster);
  
  return (
    <div className={resultModal}>
      <h1>O TEU RESULTADO:</h1>
      <button onClick={toggle}>teste</button>
      <div className={resultContainer}>
        {!togglePoster ?
        (
          <canvas 
            id='posterCanvas'
            ref={canvas}
            width={950}
            height={500}
          />
        ) : (
          <canvas 
            id='posterCanvas'
            ref={canvas}
            width={500}
            height={500}
          />
        )}
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
