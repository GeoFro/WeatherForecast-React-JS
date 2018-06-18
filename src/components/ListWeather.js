import React from 'react';

const ListWeather = props => (
  <div>
    <div>
      <div>{props.city0}</div>
      <div>{props.city0_country}</div>
      <div>{props.city0_temperature}</div>
      <div>{props.city0_temperature_min}</div>
      <div>{props.city0_temperature_max}</div>
      <div>{props.city0_description}</div>
    </div>
    <div>
      <div>{props.city1}</div>
      <div>{props.city1_country}</div>
      <div>{props.city1_temperature}</div>
      <div>{props.city1_temperature_min}</div>
      <div>{props.city1_temperature_max}</div>
      <div>{props.city1_description}</div>
    </div>
    <div>
      <div>{props.city2}</div>
      <div>{props.city2_country}</div>
      <div>{props.city2_temperature}</div>
      <div>{props.city2_temperature_min}</div>
      <div>{props.city2_temperature_max}</div>
      <div>{props.city2_description}</div>
    </div>
    <div>
      <div>{props.city3}</div>
      <div>{props.city3_country}</div>
      <div>{props.city3_temperature}</div>
      <div>{props.city3_temperature_min}</div>
      <div>{props.city3_temperature_max}</div>
      <div>{props.city3_description}</div>
    </div>
    <div>
      <div>{props.city4}</div>
      <div>{props.city4_country}</div>
      <div>{props.city4_temperature}</div>
      <div>{props.city4_temperature_min}</div>
      <div>{props.city4_temperature_max}</div>
      <div>{props.city4_description}</div>
    </div>
  </div>
);

export default ListWeather;
