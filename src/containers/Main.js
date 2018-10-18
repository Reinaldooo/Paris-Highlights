import React, { Component } from 'react';
import styled from 'styled-components'
//Components Import
import Details from '../components/Details'
import Logo from '../components/Logo'
import MarkersList from '../components/MarkersList'
import Map from './Map'

const Base = styled.div`
width: 100vw;
height: 100vh;
display: flex;
background-color: lightgray
color: white;
`

class Main extends Component {

  state = {
    test: true
  }


  render() {
    return (
      <Base>
        <Logo />
        <Map/>
        <MarkersList />
        <Details />
      </Base>
    );
  }
}

export default Main;
