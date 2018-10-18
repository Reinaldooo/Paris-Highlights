import React, { Component } from 'react';
import styled from 'styled-components'
//Components Import
import Details from '../components/Details'
import Logo from '../components/Logo'
import MarkersList from './MarkersList'
import MainMap from './MainMap'

const Base = styled.div`
width: 100vw;
height: 100vh;
display: flex;
background-color: lightgray
color: white;
`

class Main extends Component {

  state = {
    show: false
  }

  clickTest = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render() {
    return (
      <Base>
        <Logo />
        <MainMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBKPusGfnzsW8wNouu-Jt5ECiA3k38DqHc&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100vh`, width: `100vw` }} />}
          containerElement={<div style={{ height: `100vh`, width: `100vw` }} />}
          mapElement={<div style={{ height: `100vh`, width: `100vw` }} />} />
        <MarkersList click={this.clickTest} />
        <Details show={this.state.show} />
      </Base>
    );
  }
}

export default Main;
