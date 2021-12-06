import React, { useState } from 'react';
import axios from 'axios';
import TextareaAutosize from 'react-textarea-autosize';
import Result from '../../components/Result';
import {form, inputField} from './form.module.scss';

const Form = () => {
  const [answer, setAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = {Respostas: answer}
    // axios.post('https://sheet.best/api/sheets/e9a21c65-0d7e-4e49-bb29-265102e551ce', data).then((response)=>{
    //   console.log(response);
    //   setAnswer('');
    // })
    setShowResult(!showResult);
    console.log(answer);
  }

  return (
    <form className={form} onSubmit={handleSubmit}>
      <div className={inputField}>
        <TextareaAutosize
          maxRows={4}
          type='text'
          name='answer'
          placeholder='Resposta...'
          required
          onChange={(e)=>setAnswer(e.target.value)}
        />
        <button>ENVIAR</button>
      </div>
      {showResult ?
        <Result message={answer}/>
      : null}
    </form>
  )
}

export default Form;
