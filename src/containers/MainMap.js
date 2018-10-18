import React, { Component } from 'react';
import styled from 'styled-components'
import fakemap from '../images/fakemap.jpg'

const Base = styled.div`
width: 100vw;
height: 100vh;
background-color: lightblue;
background-image: url(${fakemap});
background-size: cover;
color: white;
`

class MainMap extends Component {

  state = {
    test: true
  }


  render() {
    return (
      <Base/>
    );
  }
}

export default MainMap;
