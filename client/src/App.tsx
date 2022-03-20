import React from 'react';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { actions } from './store/index'

function App() {
  
  const userState = useSelector((globalState) => globalState);
  console.log('Auth: ', userState)

  const dispatch = useDispatch();
  const AllActions = bindActionCreators(actions, dispatch);

  const { signUp, logIn } = AllActions;
  
  
  return (
    <div className="App">
      <button onClick={() => signUp('Chris')}>Sign up</button>
      
    </div>
  );
}

export default App;
