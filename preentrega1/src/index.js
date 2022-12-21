import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ-lc1qo3ZVvsihoN_NEjN_7imtvQMTF0",
  authDomain: "proyecto-coder-6918d.firebaseapp.com",
  projectId: "proyecto-coder-6918d",
  storageBucket: "proyecto-coder-6918d.appspot.com",
  messagingSenderId: "697324983269",
  appId: "1:697324983269:web:59efc23d81d97b157a150c",
  measurementId: "G-PDT8JFF2HB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

