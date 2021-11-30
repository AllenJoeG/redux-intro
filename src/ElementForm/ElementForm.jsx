import React from "react";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function ElementForm() {
  //local State for form element
  const [elementInput, setElementInput] = useState('');

  const dispatch = useDispatch();

  const elementConjuring = () => {
    //should equal e.target.value of input piece
    console.log(elementInput)

    //convention when dispatching data to Reducer, call it 'payload'
    dispatch({
      type: 'CONJURE_ELEMENT',
      payload: elementInput
    })

    setElementInput('');
  }

  return(
    <div>
      <input 
            value={elementInput}
            placeholder="Invent protophysics"
            onChange={(e) => setElementInput(e.target.value)}

          />
          <button onClick={elementConjuring}>Become a God</button>
    </div>
  )
}