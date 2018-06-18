import React, { Component } from 'react';

class Weather extends Component {

  render() {
    return (
      <div>
        <div>City Name: {this.props.city_name}</div>
        <div>Country: {this.props.city_country}</div>
        <div>Current Temperature: {this.props.city_temperature} C</div>
        <div>Weather Forecast: {this.props.city_description}</div>
      </div>
    );
  }
}

export default Weather;
