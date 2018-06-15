import React, { Component } from 'react';

import Form from './components/Form';
import Title from './components/Title';
import Weather from './components/Weather';

class App extends Component {
  state = {
    response: []
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div>
        <p>{this.state.response}</p>
        <Title />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
