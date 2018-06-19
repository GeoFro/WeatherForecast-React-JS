import React from 'react';
import styled from 'styled-components';

const CityList = styled.div`
  padding: 1rem;
  padding-top: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 0;
`;

const CityItem = styled.div`
  padding: 2rem;
  text-align: center;
  border: 0.5px #b9c1ce solid;
  border-radius: 20px;
  margin: 1rem;
`;

const CityName = styled.div`
  font-size: 2rem;
`;

const CountryName = styled.div`
  font-size: 1.2rem;
`;

const TempNow = styled.div`
  font-size: 1.8rem;
`;

const MinMax = styled.div`
  font-size: 1.5rem;
`;

const Min = styled.span`
  color: blue;
`;

const Max = styled.span`
  color: red;
`;

const Desc = styled.div`
  padding-top: 1rem;
  text-transform: capitalize;
`;

const Pic = styled.img`

`;



const ListWeather = props => (
  <CityList>
    <CityItem>
      <CityName>{props.city0}</CityName>
      <CountryName>{props.city0_country}</CountryName>
      <TempNow>{props.city0_temperature}°C</TempNow>
      <Pic src={`${props.city0_main_desc}.svg`}></Pic>
      <MinMax>
        <Min>Min: {props.city0_temperature_min}°C</Min>
         &nbsp;|&nbsp;
        <Max>Max: {props.city0_temperature_max}°C</Max>
      </MinMax>
      <Desc>{props.city0_description}</Desc>
    </CityItem>
    <CityItem>
      <CityName>{props.city1}</CityName>
      <CountryName>{props.city1_country}</CountryName>
      <TempNow>{props.city1_temperature}°C</TempNow>
      <Pic src={`${props.city1_main_desc}.svg`}></Pic>
      <MinMax>
        <Min>Min: {props.city1_temperature_min}°C</Min>
         &nbsp;|&nbsp;
        <Max>Max: {props.city1_temperature_max}°C</Max>
      </MinMax>
      <Desc>{props.city1_description}</Desc>
    </CityItem>
    <CityItem>
      <CityName>{props.city2}</CityName>
      <CountryName>{props.city2_country}</CountryName>
      <TempNow>{props.city2_temperature}°C</TempNow>
      <Pic src={`${props.city2_main_desc}.svg`}></Pic>
      <MinMax>
        <Min>Min: {props.city2_temperature_min}°C</Min>
         &nbsp;|&nbsp;
         <Max>Max: {props.city2_temperature_max}°C</Max>
      </MinMax>
      <Desc>{props.city2_description}</Desc>
    </CityItem>
    <CityItem>
      <CityName>{props.city3}</CityName>
      <CountryName>{props.city3_country}</CountryName>
      <TempNow>{props.city3_temperature}°C</TempNow>
      <Pic src={`${props.city3_main_desc}.svg`}></Pic>
      <MinMax>
        <Min>Min: {props.city3_temperature_min}°C</Min>
         &nbsp;|&nbsp;
         <Max>Max: {props.city3_temperature_max}°C</Max>
      </MinMax>
      <Desc>{props.city3_description}</Desc>
    </CityItem>
    <CityItem>
      <CityName>{props.city4}</CityName>
      <CountryName>{props.city4_country}</CountryName>
      <TempNow>{props.city4_temperature}°C</TempNow>
      <Pic src={`${props.city4_main_desc}.svg`}></Pic>
      <MinMax>
        <Min>Min: {props.city4_temperature_min}°C </Min>
         &nbsp;|&nbsp;
        <Max>Max: {props.city4_temperature_max}°C</Max>
       </MinMax>
      <Desc>{props.city4_description}</Desc>
    </CityItem>
  </CityList>
);

export default ListWeather;
