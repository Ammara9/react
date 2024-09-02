import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { ChallengesProvider } from './userinfo/ChallengesProvider';



ReactDOM.render(
  <BrowserRouter>
  <ChallengesProvider>

    <App />
  
    </ChallengesProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
