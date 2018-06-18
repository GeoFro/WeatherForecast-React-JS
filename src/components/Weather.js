import React, { Component } from 'react';

class Weather extends Component {

  render() {
    return (
    <div>
      { this.props.city_name && this.props.city_country &&
          <div>Location: {this.props.city_name}, {this.props.city_country}</div>
      }
      { this.props.city_temperature &&
        <div>Current Temperature: {this.props.city_temperature} °C</div>
      }
      { this.props.city_description &&
        <div>Weather Forecast: {this.props.city_description}</div>
      }
    </div>
    );
  }
}

export default Weather;
