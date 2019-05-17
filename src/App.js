import React from 'react';
import './App.css';
import styled from 'styled-components'

import Selectors from './components/selectors/index';
import MediaQueries from './components/mediaQueries/index';

// styled para
const StyledPara = styled.section`
  padding: 1em;
  background: papayawhip;
`;

// button with props
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

// Custom button
const ReversedButton = props => <button {...props} children={props.children.split('').reverse()} />

function App() {
  return (
    <div className="App">
      <h1>Styled component (Basic)</h1>
      <StyledPara>
        <p>
          Hello World!
        </p>
      </StyledPara>

      <h1>Normal button</h1>
      <Button>Normal</Button>

      <h1>Buttons with props</h1>
      <Button primary>Primary</Button>

      <h1>Input buttons with props</h1>
      <Input defaultValue="@probablyup" type="text" />
      <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />

      <h1>Override button</h1>
      <TomatoButton>Tomato Button</TomatoButton>

      <h1>Extending button</h1>
      <Button as="a" href="/">Link with Button styles</Button>
      <TomatoButton as="a" href="/">Link with Tomato Button styles</TomatoButton>

      <h1>Custom button</h1>
      <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>

      <br/>
      <Selectors />
      <MediaQueries />
    </div>
  );
}

export default App;
