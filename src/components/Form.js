import React from 'react';

// On submitting the form, the getWeather function that was defined in the App component will be called.
// This is possible because the getWeather function is passed down to the Weather component as a prop.

const Form = props => (
      <form onSubmit={props.getWeatherData}>
        <input type="text" name="city" placeholder="Sydney" ></input>
        <input type="text" name="country" placeholder="Australia" ></input>
        <button>Find weather</button>
      </form>
);

export default Form;
