import React, { Component } from 'react';

// On submitting the form, the getWeather function that was defined in the App component will be called.
// This is possible because the getWeather function is passed down to the Weather component as a prop.

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="Sydney" ></input>
        <input type="text" name="country" placeholder="Australia" ></input>
        <button type="button">Find weather</button>
      </form>
    );
  }
}

export default Form;
