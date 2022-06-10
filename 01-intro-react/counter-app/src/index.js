import React from 'react';
import ReactDOM from 'react-dom/client';
// import PrimeraApp from './PrimeraApp';
import './index.css';
import CounterApp from './CounterApp';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <CounterApp value ={0} />
);









// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

