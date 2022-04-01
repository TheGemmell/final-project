import { useEffect } from 'react';
import './App.css';
import { RootState } from './store/store'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { actions } from './store/index'
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((globalState:RootState) => globalState.user);
  console.log('Auth: ', userState)
  
  useEffect(() => {
    if (userState.token) {
      console.log("Has UserState")
      console.log(userState)
    } else {
      navigate('/login')
    }

  },[userState])

  
  return (
    <div className="App">
      <h1>Welcome</h1>
      
    </div>
  );
}

export default App;
