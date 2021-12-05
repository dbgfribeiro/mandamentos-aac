import React from 'react';
import Form from '../../components/Form';
import Player from '../../components/Player';
import {contentContainer, playerContainer, formContainer} from './home.module.scss';

import headline from '../../assets/headline.png'

const Home = () => {
  return (
    <div className={contentContainer}>
      <div className={playerContainer}>
        <Player />
      </div>
      <div className={formContainer}>
        <img src={headline} alt='headline'/>
        <Form />
      </div>
    </div>
  )
}

export default Home;
