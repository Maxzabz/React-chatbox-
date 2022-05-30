import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Connexion from './Connexion';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Root = () => {
  return (

    <Router>
      <Routes>
          <Route exact path="/" element={<Connexion />} />
          <Route path="/pseudo/:pseudo" element={<App />} />
          <Route element={<NotFound />} />
      </Routes>
    </Router>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

