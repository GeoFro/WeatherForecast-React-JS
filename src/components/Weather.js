import React from 'react';
import styled from 'styled-components';

const WeatherResult = styled.div`
  border: white 0.5px solid;
  border-radius: 20px;
  padding: 1.5rem;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const ResultName = styled.div`
  font-size: 2rem;
`;

const ResultCountry = styled.div`
  font-size: 1.2rem;
`;

const ResultTemp = styled.div`
  font-size: 1.8rem;
`;

const ResultDesc = styled.div`
    padding-top: 1rem;
    text-transform: capitalize;
`;

// This is a stateless functional component.
// It does not need to have state so it can be in the simplified form below.

// Data will only display if the data is present.

const Weather = props => (
  <WeatherResult>
    { props.city_name &&
        <ResultName>{props.city_name}</ResultName>
    }
    { props.city_country &&
      <ResultCountry>{props.city_country}</ResultCountry>
    }
    { props.city_temperature &&
      <ResultTemp>Current Temperature: {props.city_temperature} °C</ResultTemp>
    }
    { props.city_description &&
      <ResultDesc>Weather Forecast: {props.city_description}</ResultDesc>
    }
    { props.error &&
      <div>{props.error}</div>
    }
  </WeatherResult>
);

export default Weather;
