import React from 'react';
import PropTypes from 'prop-types'; 

import {resultModal, resultContainer} from './result.module.scss';

const Result = ({message, restart}) => {
  return (
    <div className={resultModal}>
      <h1>O teu resultado!</h1>
      <div className={resultContainer}>
        <p>{message}</p>
      </div>
      <button onClick={restart}>Reiniciar</button>
    </div>
  )
}

export default Result;

Result.propTypes = {
  message: PropTypes.string,
  restart: PropTypes.func,
};
