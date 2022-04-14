import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './pages/Login'
import SignUp from './pages/Signup';
import Workouts from './pages/Workouts';
import NavBar from './components/NavBar'
import reportWebVitals from './reportWebVitals';

import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import Store from './store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import Theme from './utils/theme'
import DetailedWorkout from './components/Workout';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/workouts" element={<Workouts />} >
              <Route path=":workoutId" element={<DetailedWorkout />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
