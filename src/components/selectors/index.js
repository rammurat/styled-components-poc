import React from 'react'
import styled, {keyframes} from 'styled-components'

const Pseudo = styled.button`
    color: blue;
    font-size: 32px;
    :hover {
        color: red;
        cursor: pointer;
    }
`

const Thing = styled.div.attrs({ tabIndex: 0 })`
  color: blue;
  width:200px;
  margin: 0 auto;

  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
    background: lime; // <Thing> next to <Thing>
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`

// additional props 
const Input = styled.input.attrs(({ size }) => ({
    // we can define static props
    type: "password",
  
    // or we can define dynamic ones
    margin: size || "1em",
    padding: size || "1em"
  }))`
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  
    /* here we use the dynamically computed props */
    margin: ${props => props.margin};
    padding: ${props => props.padding};
`;

// Create the keyframes
const rotate = keyframes`
    from {
    transform: rotate(0deg);
    }

    to {
    transform: rotate(360deg);
    }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
`;

const Selectors = () => {
    return (
        <div>
            <h1>Pseudoselectors</h1>
            <Pseudo> Hover me </Pseudo>

            <React.Fragment>
                <Thing>Hello world!</Thing>
                <Thing>How ya doing?</Thing>
                <Thing className="something">The sun is shining...</Thing>
                <div>Pretty nice day today.</div>
                <Thing>Don't you think?</Thing>
                <div className="something-else">
                <Thing>Splendid.</Thing>
                </div>
            </React.Fragment>

            <h1>Additional props</h1>
            <Input placeholder="A small text input" size="1em" />
            <Input placeholder="A bigger text input" size="2em" />

            <h1>Animation</h1>
            <Rotate>Animating...</Rotate>

            <h1>Multiple themes</h1>
            <br/>
        </div>
    )
}

export default Selectors