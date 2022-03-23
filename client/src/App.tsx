import React from 'react';
import './App.css';
import { GlobalState } from './store/store'
import { useSelector, useDispatch, DefaultRootState } from 'react-redux';
import { bindActionCreators } from 'redux'
import { actions } from './store/index'

function App() {
  
  
  const dispatch = useDispatch();
  const AllActions = bindActionCreators(actions, dispatch);
  const userState = useSelector<GlobalState>((globalState) => globalState.user);
  console.log('Auth: ', userState)

  const { signUp, logIn } = AllActions;

  if (userState) {
    console.log(userState)
  }
  
  
  return (
    <div className="App">
      <button onClick={() => signUp('Chris')}>Sign up</button>
      
    </div>
  );
}

export default App;
