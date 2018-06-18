import React from 'react';

// This is a stateless functional component.
// It does not need to have state so it can be in the simplified form below.

const Weather = props => (
  <div>
    { props.city_name && props.city_country &&
        <div>Location: {props.city_name}, {props.city_country}</div>
    }
    { props.city_temperature &&
      <div>Current Temperature: {props.city_temperature} °C</div>
    }
    { props.city_description &&
      <div>Weather Forecast: {props.city_description}</div>
    }
    { props.error &&
      <div>{props.error}</div>
    }
  </div>
);

export default Weather;
