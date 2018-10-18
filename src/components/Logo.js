import React from 'react';
import styled from 'styled-components'

const LogoDiv = styled.div`
display: flex;
color: white;
padding: .5% 2%;
background-color: rgba(240, 128, 128, 0.9);
position: absolute;
left: 50%;
text-align: center;
transform: translateX(-50%);
font-family: 'Amatic SC', cursive;
border-bottom-left-radius: .5rem;
border-bottom-right-radius: .5rem;
z-index: 1;

& h1 {
  font-family: 'Amatic SC', cursive;
  font-size: 3rem;
  margin: 0;
}
`

const Logo = () => {

    return (
      <LogoDiv>
          <h1>Paris Highlights</h1>
      </LogoDiv>
    );
  }

export default Logo;