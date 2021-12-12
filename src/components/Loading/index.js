import React from 'react'
import ReactLoading from 'react-loading';

import {loading} from './loading.module.scss';

const Loading = () => {
  return (
    <div className={loading}>
      <ReactLoading type={'bubbles'} color={'#161616'} />
    </div>
  )
}

export default Loading
