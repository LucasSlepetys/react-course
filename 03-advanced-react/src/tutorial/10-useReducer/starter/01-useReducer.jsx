import React, { useReducer, useState } from 'react';
import { data } from '../../../data';
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';
import reducer from './reducer';

const defaultState = {
  people: data,
  isLoading: false,
};

const ReducerBasics = () => {
  //pass in a reducer function and a default state in useReducer()
  //gets back an state and a dispatch
  //by using a dispatch it will update the state unless specified
  //state is passed as the first argument automatically in dispatch

  const [state, dispatch] = useReducer(reducer, defaultState);

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  return (
    <div style={{ width: '100vw', margin: '0 50%' }}>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={state.people.length > 0 ? clearList : resetList}
      >
        {state.people.length > 0 ? 'clear items' : 'reset'}
      </button>
    </div>
  );
};

export default ReducerBasics;
