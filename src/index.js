import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Password from './passwordGen';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import RightNavBar from './navbar';
import progress from './progressbar';



//Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <progress />
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
