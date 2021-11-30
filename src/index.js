import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

//REDUX SETUP
import { createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

//Import PROVIDER. Gives app a way of accessing redux, wraps the <App />
import { Provider } from 'react-redux';

//One or more reducers, Global pieces of state that live outside of React Component heirarchy
//A function that takes two arguments, previous State, and Action
const count = (state = 0, action) => {
  console.log(action);

  // if (action.type === 'INCREASE_COUNT') {
  //   return state + 1;
  // } else if(action.type === 'DECREASE_COUNT') {
  //   return state - 1;
  // } else if(action.type === 'SCREAM_ZERO') {
  //   return state - state;
  //   //return 0;
  // }
  // return state;

  //OR

  switch (action.type) {
    case 'INCREASE_COUNT':
      return state + 1;
    case 'DECREASE_COUNT':
      return state - 1;
    case 'SCREAM_ZERO':
      return 0;
    default: return state;
  }
};
//Reducer piece of Global State
const elementList = (state = ['oxygen', 'carbon', 'gold', 'argon'], action) => {
  console.log(action)

  switch (action.type) {
    case 'CONJURE_ELEMENT':
      //make an array copy of state
      //This does not work because updateArray is a REFERENCE to state and not actually changing  
      // let updateArray = state;
      //so MUST use a spread operator to create actual COPY that is separate
      const stateCopy = [...state];
      //push payload to copy
      stateCopy.push(action.payload)
      //return new array with extra
      return stateCopy;
    default:
      return state;
  }
};

//One Redux store to hold Global State reducers
//Utilize combineReducers to hold an object argument of the reducers.
//createStore takes first argument combineReducers({}), 
//second argument applyMiddleware(logger), both imported above, logs state updates to console
const storeInstance = createStore(
  combineReducers({
    count,
    elementList
  }),
  applyMiddleware(
    logger
  )
);

ReactDOM.render(
  <React.StrictMode>
    {/* Prop must be called 'store' for everything under the hood */}
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
