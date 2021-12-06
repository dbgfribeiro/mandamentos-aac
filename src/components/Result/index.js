import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types'; 

import {resultModal, resultContainer} from './result.module.scss';

const Result = ({ message }) => {
  const [poster, setPoster] = useState(null);
  const canvas = useRef(null);

  useEffect(() => {
    const background = new Image();
    background.src = 'background.jpg';
    background.onload = () => setPoster(background);
  }, [])

  useEffect(() => {
    if(poster && canvas) { 
      const ctx = canvas.current.getContext("2d");
      ctx.drawImage(poster, 0, 0, 1000, 500);
      ctx.font = "60px Hanson";
      ctx.fillText(message, (1000 / 2), (400));
    }
  }, [poster, canvas, message])

  return (
    <div className={resultModal}>
      <h1>O TEU RESULTADO: </h1>
      <div className={resultContainer}>
        {/* <p>{message}</p> */}
        <canvas 
          ref={canvas}
          width={1000}
          height={500}
        />
      </div>
      <a href='/'>REINICIAR</a>
    </div>
  )
}

export default Result;

Result.propTypes = {
  message: PropTypes.string,
};
