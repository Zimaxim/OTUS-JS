import React, { Component } from 'react';
import './App.css';

class WeatherDisplay extends Component {
    constructor(props) {
      super(props);
      this.state = {
        weatherData: null
      };
    }
    componentDidMount() {
      const zip = this.props.zip;
      const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
        zip +
        "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric";
        //"&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
      fetch(URL).then(res => res.json()).then(json => {
        this.setState({ weatherData: json });
      });
    }
    render() {
      const weatherData = this.state.weatherData;
      if (!weatherData) return <div>Loading</div>;
      const weather = weatherData.weather[0];
      
      const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";  

      return (
        <div>
        <div className="w3-container w3-light-gray">
        <h2>
        {weather.main} in {weatherData.name}
        <img src={iconUrl} alt={weatherData.description} />
        </h2>
        </div>
          
          <p>Current: {weatherData.main.temp}°</p>
          <p>High: {weatherData.main.temp_max}°</p>
          <p>Low: {weatherData.main.temp_min}°</p>
          <p>Wind Speed: {weatherData.wind.speed} m/hr</p>
        </div>
      );


    }
  }
  export default WeatherDisplay;
