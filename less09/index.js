import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const PLACES = [
    { name: "Москва", zip: "101000" },
    { name: "Санкт-Петербург", zip: "190000" },
    { name: "Тюмень", zip: "625000" },
    { name: "Владивосток", zip: "690000" }
  ];

ReactDOM.render(<App  places={PLACES} />, document.getElementById('root'));
registerServiceWorker();
