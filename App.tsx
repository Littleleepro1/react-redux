import React, { useState } from 'react';
import './style.css';

import { createStore } from 'redux';
import { Provider, useSelector, useDispatch, connect } from 'react-redux';

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      number: 1,
    };
  }
  const newState = { ...currentState };

  if (action.type == 'PLUS') {
    newState.number++;
  }

  return newState;
}
const store = createStore(reducer);

export default function App() {
  const [number, setNumber] = useState(1);

  return (
    <div id="container">
      <h1>root </h1>
      <div id="grid">
        <Provider store={store}>
          <Left1></Left1>
          <Right1> </Right1>
        </Provider>
      </div>
    </div>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>Left1 </h1>
      <Left2> </Left2>
    </div>
  );
}

function Left2(props) {
  console.log('2');
  return (
    <div>
      <h1>Left2 : </h1>
      <Left3></Left3>
    </div>
  );
}

function Left3(props) {
  console.log('3');
  const number = useSelector((state) => state.number);

  return (
    <div>
      <h1>Left3 : {number} </h1>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 onIncrease={() => {}}></Right2>
    </div>
  );
}

function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3 onIncrease={() => {}}></Right3>
    </div>
  );
}

function Right3(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: 'PLUS' });
        }}
      ></input>
    </div>
  );
}

/*
https://www.youtube.com/watch?v=yjuwpf7VH74&t=2s
https://react-redux.js.org/introduction/getting-started

https://stackblitz.com/ - 온라인.코딩
https://stackblitz.com/edit/react-ts-uuzlfk?file=App.tsx,style.css,index.html

https://studiomeal.com/archives/533   GRID.FLEX
*/
