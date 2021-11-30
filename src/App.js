import logo from './logo.svg';
import './App.css';
//New Hook way to access Reducers!
import { useSelector, useDispatch } from 'react-redux';
import { useState} from 'react';

function App() {
  //useSelector takes a function as an argument. That function grabs the createStore() from index.js
  //and allows to to access the Reducers within a returned object.
  // const reduxStore = useSelector((store) => store);
  // console.log(reduxStore); //returns an object with count: 0, elementList: Array(4)

  //Global State Reducer Fetches
  const elementList = useSelector((store) => store.elementList);
  const counter = useSelector((store) => store.count)

  //dispatch({type: 'INSTRUCT_REDUCERS'}) must be unique, all Reducers are listening for these types
  const dispatch = useDispatch();

  const clickity = () => {
    //dispatch function takes an object as an argument, with a 'type':'action pair {type: }
    dispatch({type: 'INCREASE_COUNT'})
  };

  //local State for form element
  const [elementInput, setElementInput] = useState('');

  //click handler for element thingie
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

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h1>{counter}</h1>
        {/* Abstract it to a higher function? NAH */}
        <button onClick={clickity}> 👍 🔢 👍 </button>
        {/* Call the dispatch in line! */}
        <button onClick={() => dispatch({type: 'DECREASE_COUNT'})}> 👎 🔢 👎 </button>
        <button onClick={() => dispatch({type: 'SCREAM_ZERO'})}> ⚡ 0️⃣ ⚡ </button>
        
        <div>
          <input 
            value={elementInput}
            placeholder="Invent protophysics"
            onChange={(e) => setElementInput(e.target.value)}

          />
          <button onClick={elementConjuring}>Become a God</button>
        <ul>
          {/* .map second argument 'i' makes an index tracker, but SHOULD be an ID in database */}
          {elementList.map((element, i) => {
            return <li key={i}>{element}</li>
          })}
        </ul>
      </div>
      
      
      </header>
      
    </div>
  );
}

export default App;
