import React from 'react';
import styled from 'styled-components';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const FormContainer = styled.div`
  width: 50%;
  margin: auto;
  padding: 2rem;
`;

const ButtonStyle = {
  padding: '1rem',
  margin: 'auto',
  marginTop: '1rem'
}

const InputStyle = {
  padding: '1rem'
}

// On submitting the form, the getWeather function that was defined in the App component will be called.
// This is possible because the getWeather function is passed down to the Weather component as a prop.

const FormComponent = props => (
  <FormContainer>
    <Form onSubmit={props.getWeatherData}>
      <Label>Lookup the weather in your city</Label>
      <Input style={InputStyle} type="text" name="city" placeholder="Sydney" ></Input>
      <Input style={InputStyle} type="text" name="country" placeholder="Australia" ></Input>
      <Button style={ButtonStyle} outline color="info">Find weather</Button>
    </Form>
  </FormContainer>
);

export default FormComponent;
