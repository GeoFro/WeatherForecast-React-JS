import React, { Component } from 'react';

import Form from './components/Form';
import Title from './components/Title';
import Weather from './components/Weather';

const APIKEY = '91525a419dbbd055bbb24eabdb8bac68';

class App extends Component {

  state = {
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

  // The Form component is given a prop of getWeather. The value of which is the getWeather function defined in the App component above.
  // The getWeather function will now be accessible inside the Form component.

  render() {
    return (
      <div>
        <Title />
        <Form getWeatherData={this.getWeatherData}/>
        <Weather
        city_name={this.state.city_name}
        city_country={this.state.city_country}
        city_temperature={this.state.city_temperature}
        city_description={this.state.city_description}
        error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
