import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyAz4T6y4tt_IU8o-ngId8z0lO-wlwOpOrs",
  authDomain: "dbest-note-app-cccd2.firebaseapp.com",
  projectId: "dbest-note-app-cccd2",
  storageBucket: "dbest-note-app-cccd2.appspot.com",
  messagingSenderId: "632892892057",
  appId: "1:632892892057:web:220bcc47a119358e74e908",
  measurementId: "G-9ETL3LV83V"
};

initializeApp(firebaseConfig)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
