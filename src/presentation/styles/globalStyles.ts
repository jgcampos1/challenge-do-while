import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root {
  --purple-pastel: #B983FF;
  --white: #ffffff;
  --dark-color:#4D2B79;
  --blue-pastel:#94B3FD;
  --blue-clean-pastel:#94DAFF;
  --gren-clean-pastel:#99FEFF;
}
  *{
    margin:0;
    padding:0;
    border:0;
  }
  body{
  
    background:#f0f0f5;
    font-family: 'IBM Plex Sans', sans-serif;
      
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Comfortaa', cursive;
  }
  
  h1{
    font-size:46px;
  }
  h2{
    font-size:36px;
  }
  h3{
    font-size:32px;
  }
  h4{
    font-size:28px;
  }
  h5{
    font-size:24px;
  }
  h6{
    font-size:21px;
  }
  
  `
