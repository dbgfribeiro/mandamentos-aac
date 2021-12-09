import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';

import {resultModal, resultContainer, social, btnWrapper} from './result.module.scss';

const Result = ({ message , playerId}) => {
  const [poster, setPoster] = useState(null);
  const canvas = useRef(null);

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

      /*Player*/
      const player = new Image();
      player.src = 'players/player' + playerId + '.png';
      player.onload = function(){
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(player, 70, 32, 375, 469.16);
      }

      /*Headline*/
      var maxWidth = 380;
      var lineHeight = 32;
      var x = 475;
      var y = 310;
      var words = message.split(' ');
      var line = '';

      const headline = new Image();
      headline.src = 'headline.png';
      headline.onload = function(){
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(headline, 425, 75, 450, 213.64);

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


  return (
    <div className={resultModal}>
      <h1>O TEU RESULTADO:</h1>
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
