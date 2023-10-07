import CodeMirror from '@uiw/react-codemirror';

import {useState }   from 'react'

const Edit = (props) => {

    const {value, extension , setValue , onChange , title} = props;

    return (
      <div className='grow '>
          <CodeMirror 
          value={value}
          height="200px"
          onChange={onChange}
          extensions={extension}
        />
      </div>
    )
  }

export default Edit 