import React, { Component } from 'react';

import Form from './components/Form';
import Title from './components/Title';
import Weather from './components/Weather';

const API = '91525a419dbbd055bbb24eabdb8bac68';

class App extends Component {


  // Getting data from the OpenWeatherMap api
  // The function is given the argument (e) in order to prevent a full page refresh on running the fucntion (when the form in the Form component is submitted)

  getWeatherData = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }

  // The Form component is given a prop of getWeather. The value of which is the getWeather function defined in the App component above.
  // The getWeather function will now be accessible inside the Form component.

  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
