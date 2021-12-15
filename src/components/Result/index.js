import React, { useRef, useState } from "react";
import { exportComponentAsJPEG } from 'react-component-export-image';
import PropTypes from 'prop-types';

import tucoimbra from '../../assets/tucoimbra.png'

import {
  resultModal,
  resultContainer,
  btnWrapper,
  posterStyles,
  resultPoster,
  resultPosterSquare,
  resultPosterStory,
  messageWrapper,
  playerImage,
  tag,
  controls,
  download
} from './result.module.scss';


const ComponentToPrint = React.forwardRef(({message, player, posterNum}, ref) => (
  <>
    {posterNum === 0 ? (
      <div ref={ref} class={resultPoster}>
        <img src={'players/player' + player + '.png'} alt='player' className={playerImage}/>
        <div className={messageWrapper}>
          <img src='headline.png' alt='headline'/>
          <h1>{message}</h1>
        </div>
        <img src={tucoimbra} alt='hashtag' className={tag}/>
      </div>
    ) : posterNum === 1 ?( 
      <div ref={ref} class={resultPosterSquare}>
      </div>
    ) : posterNum === 2 ?( 
      <div ref={ref} class={resultPosterStory}>
      </div>
    ) : null}
  </>
));

const Result = ({message, player}) => {
  const [posterStyle, setPosterStyle] = useState(0);

  const posterRef = useRef();
  
  return (
      <div className={resultModal}>
        <h1>Guarda a tua imagem e partilha connosco através do <span>#TuCoimbra</span></h1>
        <div className={resultContainer}>
        <ComponentToPrint
          ref={posterRef}
          message={message}
          player={player}
          posterNum={posterStyle}
          w='50'
          h='50'
        />
        </div>
        <div className={btnWrapper}>
          <div className={posterStyles}>
            <button onClick={()=>setPosterStyle(0)}><div></div><p>horizontal</p></button>
            <button onClick={()=>setPosterStyle(1)}><div></div><p>quadrado</p></button>
            <button onClick={()=>setPosterStyle(2)}><div></div><p>vertical</p></button>
          </div>

          <div className={controls}>
            <button className={download} onClick={() => exportComponentAsJPEG(posterRef)}>Guarda a tua imagem</button>
            <a href='/'>REPETIR</a>
          </div>
        </div>
      </div>
  )
}

export default Result;

Result.propTypes = {
  message: PropTypes.string,
  playerId: PropTypes.string,
};
