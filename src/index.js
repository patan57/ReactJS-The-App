import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs8ooVbLudJRwkLeHivkaH4AY9zKqEs_w",
  authDomain: "coderhouse2023.firebaseapp.com",
  projectId: "coderhouse2023",
  storageBucket: "coderhouse2023.appspot.com",
  messagingSenderId: "376341140005",
  appId: "1:376341140005:web:d701a28fe2e0f94ea165cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
