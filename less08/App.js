/*
Сделать Header, Footer, Navigation компоненты, определить ссылки
для Navigation, передать их через Header
*/

import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';



var user = {
  username: 'Maxim',
  email: 'ivan@example.com'
};
const nav = [
	{
		link : "01.html",
		text : " text1  "
	},
	{
		link : "02.html",
		text : " text2  "
	},
	{
		link : "03.html",
		text : " text3  "
	}

];

class App extends Component {
  render() {
    return (
      <div className="App">
		<Header  user= {user} links={nav} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		  <p>
		  Сделать Header, Footer, Navigation компоненты, определить ссылки
для Navigation, передать их через Header
</p>
		<Footer />
      </div>
    );
  }
}

export default App;
