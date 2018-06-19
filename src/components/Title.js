import React from 'react';
import styled from 'styled-components';

const Titles = styled.div`
  margin: auto;
  text-align: center;
  font-size: 2.5rem;
  padding: 1rem;
  padding-bottomm: 0;
  margin-top: 0.5rem;
`;

const Title = () => (
  <Titles>
    El Tiempo - A simple weather app
  </Titles>
)

export default Title;
