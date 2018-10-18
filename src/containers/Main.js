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
    show: true
  }

  click = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }


  render() {
    return (
      <Base>
        <Logo />
        <MainMap/>
        <MarkersList click={this.click}/>
        <Details show={this.state.show}/>
      </Base>
    );
  }
}

export default Main;
