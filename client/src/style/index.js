import { createGlobalStyle } from 'styled-components'

export const colors = {
  purple: 'rgb(115,106,203)',
  lightPurple: 'rgb(145,139,215)',
  pink: 'rgb(255,113,167)',
  lightPink: 'rgb(285,151,192)',
  orange: 'rgb(251,192,114)',
  yellow: 'rgb(249,240,151)',
  blue: 'rgb(91,214,253)',
  lightBlue: 'rgb(164,230,255)', 
  black:'rgb(70,70,85)',
  lightBlack: 'rgb(86,86,100)',
  darkPurple: 'rgb(87,70,123)',
  white: 'rgb(253,253,253)',
  green: '#C9F299'
}

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'Comfortaa', sans-serif;
  }
  body {
    background: ${colors.black};
  }
  a {
    text-decoration: none;
  }
`
