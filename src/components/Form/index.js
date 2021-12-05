import React, { useState } from 'react';
import axios from 'axios';
import {form} from './form.module.scss';

const Form = () => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {Respostas: answer}
    axios.post('https://sheet.best/api/sheets/e9a21c65-0d7e-4e49-bb29-265102e551ce',data).then((response)=>{
      console.log(response);
      setAnswer('');
    })
  }

  return (
    <form className={form} onSubmit={handleSubmit}>
      <input
        type='text'
        name='answer'
        placeholder='Resposta...'
        required
        onChange={(e)=>setAnswer(e.target.value)}
      />
      <button>Submit</button>
    </form>
  )
}

export default Form;
