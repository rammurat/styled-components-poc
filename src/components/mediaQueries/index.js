import React, {Fragment} from 'react'
import styled, {ThemeProvider, css} from 'styled-components'
import './index.css'
// Define our button, but with the use of props.theme this time
const Button = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    fg: "palevioletred"
  }
}

// Define our `fg` and `bg` on the theme
const theme = {
    fg: "palevioletred",
    bg: "white"
  };

// This theme swaps `fg` and `bg`
const invertTheme = ({ fg, bg }) => ({
    fg: bg,
    bg: fg
  });

const Para = styled.p`
    color: orange;
`

const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 576,
}
  
// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
    }`
    return acc
}, {})

const Content = styled.div`
    height: 3em;
    width: 3em;
    background: papayawhip;
    margin: 0 auto;
    /* Now we have our methods on media and can use them instead of raw queries */
    ${media.desktop`background: dodgerblue;`}
    ${media.tablet`background: mediumseagreen;`}
    ${media.phone`background: palevioletred;`}
`;

// Static object
const Box = styled.div({
    background: 'palevioletred',
    height: '50px',
    width: '50px',
    margin: '0 auto'
  });

const Register = () => {
    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <Button>Themed</Button>
                <ThemeProvider theme={invertTheme}>
                    <Button>Inverted Theme</Button>
                </ThemeProvider>

                <h1>Duplicate use case</h1>
                <Para className="duplicate">Same class name</Para>

                <h1>Media Templates</h1>
                <Content />

                <h1>Using JS object instead of string</h1>
                <Box />

                <h1>Bonus : View browser output</h1>
                <ul>
                  <li>How ids and classes added on the fly?</li>
                  <li>How all css are combined?</li>
                </ul>
            </Fragment>
        </ThemeProvider>
    )
}

export default Register