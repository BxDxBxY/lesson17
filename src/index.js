import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from './API';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App2/>
    <App />
  </React.StrictMode>
);

