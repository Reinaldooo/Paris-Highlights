import React from 'react';
import styled from 'styled-components'

const LogoDiv = styled.div`
display: flex;
color: white;
padding: .5% 2%;
background-color: lightcoral;
position: absolute;
left: 50%;
text-align: center;
transform: translateX(-50%);
font-family: 'Amatic SC', cursive;
border-bottom-left-radius: 1.5rem;
border-bottom-right-radius: 1.5rem;
z-index: 1;
margin-top: -5px;

& h1 {
  font-family: 'Amatic SC', cursive;
  font-size: 2.5rem;
  margin: 0;
}
`

const Logo = (props) => {

    return (
      <LogoDiv>
          <h1>Paris Highlights</h1>
      </LogoDiv>
    );
  }

export default Logo;