import React, { Component } from 'react';

import FormComponent from './components/FormComponent';
import Title from './components/Title';
import Weather from './components/Weather';
import ListWeather from './components/ListWeather';

import styled from 'styled-components';

const BodyStyle = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
`;

const APIKEY = '91525a419dbbd055bbb24eabdb8bac68';

const RigaID = '456172';
const SydneyID = '2147714';
const LondonID = '2643743';
const MadridID = '3117735';
const VladivostokID = '2013348';

class App extends Component {

  state = {

    city0: undefined,
    city0_country: undefined,
    city0_temperature: undefined,
    city0_temperature_min: undefined,
    city0_temperature_max: undefined,
    city0_main_desc: undefined,
    city0_description: undefined,

    city1: undefined,
    city1_country: undefined,
    city1_temperature: undefined,
    city1_temperature_min: undefined,
    city1_temperature_max: undefined,
    city1_main_desc: undefined,
    city1_description: undefined,

    city2: undefined,
    city2_country: undefined,
    city2_temperature: undefined,
    city2_temperature_min: undefined,
    city2_temperature_max: undefined,
    city2_main_desc: undefined,
    city2_description: undefined,

    city3: undefined,
    city3_country: undefined,
    city3_temperature: undefined,
    city3_temperature_min: undefined,
    city3_temperature_max: undefined,
    city3_main_desc: undefined,
    city3_description: undefined,

    city4: undefined,
    city4_country: undefined,
    city4_temperature: undefined,
    city4_temperature_min: undefined,
    city4_temperature_max: undefined,
    city4_main_desc: undefined,
    city4_description: undefined,

    city_name: undefined,
    city_country: undefined,
    city_temperature: undefined,
    city_description: undefined,
    error: undefined
  }

  // Getting data from the OpenWeatherMap api
  // The function is given the argument (e) in order to prevent a full page refresh on running the fucntion (when the form in the Form component is submitted)

  getWeatherData = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);

    if (city && country) {
      this.setState({
        city_name: data.name,
        city_country: data.sys.country,
        city_temperature: data.main.temp,
        city_description: data.weather[0].description,
        error: ''
      });
    } else {
      this.setState({
        city_name: undefined,
        city_country: undefined,
        city_temperature: undefined,
        city_description: undefined,
        error: 'Please enter a valid city and country'
      });
    }
  }

  getTopCityData = async () => {

    const list_api_call = await fetch(`http://api.openweathermap.org/data/2.5/group?id=${RigaID},${SydneyID},${MadridID},${LondonID},${VladivostokID}&appid=${APIKEY}&units=metric`);
    const list_data = await list_api_call.json();
    console.log(list_data);

    this.setState({
      city0: list_data.list[0].name,
      city0_country: list_data.list[0].sys.country,
      city0_temperature: list_data.list[0].main.temp,
      city0_temperature_min: list_data.list[0].main.temp_min,
      city0_temperature_max: list_data.list[0].main.temp_max,
      city0_main_desc: list_data.list[0].weather[0].main,
      city0_description: list_data.list[0].weather[0].description,

      city1: list_data.list[1].name,
      city1_country: list_data.list[1].sys.country,
      city1_temperature: list_data.list[1].main.temp,
      city1_temperature_min: list_data.list[1].main.temp_min,
      city1_temperature_max: list_data.list[1].main.temp_max,
      city1_main_desc: list_data.list[1].weather[0].main,
      city1_description: list_data.list[1].weather[0].description,

      city2: list_data.list[2].name,
      city2_country: list_data.list[2].sys.country,
      city2_temperature: list_data.list[2].main.temp,
      city2_temperature_min: list_data.list[2].main.temp_min,
      city2_temperature_max: list_data.list[2].main.temp_max,
      city2_main_desc: list_data.list[2].weather[0].main,
      city2_description: list_data.list[2].weather[0].description,

      city3: list_data.list[3].name,
      city3_country: list_data.list[3].sys.country,
      city3_temperature: list_data.list[3].main.temp,
      city3_temperature_min: list_data.list[3].main.temp_min,
      city3_temperature_max: list_data.list[3].main.temp_max,
      city3_main_desc: list_data.list[3].weather[0].main,
      city3_description: list_data.list[3].weather[0].description,

      city4: list_data.list[4].name,
      city4_country: list_data.list[4].sys.country,
      city4_temperature: list_data.list[4].main.temp,
      city4_temperature_min: list_data.list[4].main.temp_min,
      city4_temperature_max: list_data.list[4].main.temp_max,
      city4_main_desc: list_data.list[4].weather[0].main,
      city4_description: list_data.list[4].weather[0].description

    })
  }

  componentDidMount() {
    this.getTopCityData();
  };

  // The Form component is given a prop of getWeather. The value of which is the getWeather function defined in the App component above.
  // The getWeather function will now be accessible inside the Form component.

  render() {
    return (
      <BodyStyle>
        <Title />
        <ListWeather
        city0={this.state.city0}
        city0_country={this.state.city0_country}
        city0_temperature={this.state.city0_temperature}
        city0_temperture_min={this.state.city0_temperature_min}
        city0_temperature_max={this.state.city0_temperature_max}
        city0_main_desc={this.state.city0_main_desc}
        city0_description={this.state.city0_description}

        city1={this.state.city1}
        city1_country={this.state.city1_country}
        city1_temperature={this.state.city1_temperature}
        city1_temperture_min={this.state.city1_temperature_min}
        city1_temperature_max={this.state.city1_temperature_max}
        city1_main_desc={this.state.city1_main_desc}
        city1_description={this.state.city1_description}

        city2={this.state.city2}
        city2_country={this.state.city2_country}
        city2_temperature={this.state.city2_temperature}
        city2_temperture_min={this.state.city2_temperature_min}
        city2_temperature_max={this.state.city2_temperature_max}
        city2_main_desc={this.state.city2_main_desc}
        city2_description={this.state.city2_description}

        city3={this.state.city3}
        city3_country={this.state.city3_country}
        city3_temperature={this.state.city3_temperature}
        city3_temperture_min={this.state.city3_temperature_min}
        city3_temperature_max={this.state.city3_temperature_max}
        city3_main_desc={this.state.city3_main_desc}
        city3_description={this.state.city3_description}

        city4={this.state.city4}
        city4_country={this.state.city4_country}
        city4_temperature={this.state.city4_temperature}
        city4_temperture_min={this.state.city4_temperature_min}
        city4_temperature_max={this.state.city4_temperature_max}
        city4_main_desc={this.state.city4_main_desc}
        city4_description={this.state.city4_description}
        />
        <FormComponent getWeatherData={this.getWeatherData}/>
        <Weather
        city_name={this.state.city_name}
        city_country={this.state.city_country}
        city_temperature={this.state.city_temperature}
        city_description={this.state.city_description}
        error={this.state.error}
        />
      </BodyStyle>
    );
  }
}

export default App;
