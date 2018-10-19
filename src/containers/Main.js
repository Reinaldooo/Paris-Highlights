import React, { Component } from 'react';
import styled from 'styled-components'
//Components Import
import Details from '../components/Details'
import Logo from '../components/Logo'
import MarkersList from './MarkersList'
import MainMap from './MainMap'
import { markers, defaultMarkers } from '../utils'

const Base = styled.div`
width: 100vw;
height: 100vh;
display: flex;
background-color: lightgray
color: white;
`

class Main extends Component {

  state = {
    show: false,
    center: { lat: 48.8664771, lng: 2.3172632 },
    activeMarker: {},
    markerClicked: false,
    markers,
    zoom: 14,
    filtered: false
  }

  markerClickZoom = (latLng, i) => {
    let changedMarkers = [...this.state.markers]
    changedMarkers[i].animation = !changedMarkers[i].animation
    this.setState(prevState => ({
      show: !prevState.show,
      activeMarker: prevState.markers[i],
      markers: changedMarkers,
      center: latLng,
      markerClicked: true,
      zoom: 17
    }));   
  }

  markerClickReset = (i) => {
    let changedMarkers = [...this.state.markers]
    changedMarkers[i].animation = !changedMarkers[i].animation
    this.setState(prevState => ({
      show: !prevState.show,
      activeMarker: {},
      markers: changedMarkers,
      center: { lat: 48.8664771, lng: 2.3172632 },
      markerClicked: false,
      zoom: 14
    }));    
  }

  resetMap = () => {
    this.setState({
      show: false,
      activeMarker: {},
      center: { lat: 48.8664771, lng: 2.3172632 },
      markers: defaultMarkers,
      markerClicked: false,
      zoom: 14
    });
  }

  filterMarkers = (query) => {
    this.setState({
      markers: defaultMarkers.filter((m) => m.name.includes(query)),
      center: { lat: 48.8664771, lng: 2.3172632 },
      zoom: 14,
      filtered: true
    })
  }

  resetMarkers = () => {
    this.setState({
      markers: defaultMarkers,
      filtered: false
    })
  }

  render() {
    return (
      <Base>
        <Logo />
        <MainMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBKPusGfnzsW8wNouu-Jt5ECiA3k38DqHc&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100vh`, width: `100vw` }} />}
          containerElement={<div style={{ height: `100vh`, width: `100vw` }} />}
          mapElement={<div style={{ height: `100vh`, width: `100vw` }} />}
          markers={this.state.markers}
          center={this.state.center}
          markerClicked={this.state.markerClicked}
          markerClickZoom={this.markerClickZoom}
          resetMap={this.resetMap}
          zoom={this.state.zoom}
        />
        <MarkersList
          clickHandler={this.clickHandler}
          markers={this.state.markers}
          markerClickZoom={this.markerClickZoom}
          markerClickReset={this.markerClickReset}
          filterMarkers={this.filterMarkers}
          resetMarkers={this.resetMarkers}
          filtered={this.state.filtered}
        />
        <Details show={this.state.show} reset={this.resetMap}/>
      </Base>
    );
  }
}

export default Main;
