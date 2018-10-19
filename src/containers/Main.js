import React, { Component } from 'react';
import styled from 'styled-components'
//Components Import
import Details from '../components/Details'
import Logo from '../components/Logo'
//containers import
import MarkersList from './MarkersList'
import MainMap from './MainMap'
//Utils import
import { markers, defaultMarkers, KEY } from '../utils'

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
    markerClicked: false,
    markers,
    zoom: 14,
    filtered: false
  }

  markerClick = (latLng, i) => {
    if (!this.state.markerClicked) {
      let changedMarkers = [...this.state.markers]
      changedMarkers[i].animation = !changedMarkers[i].animation
      changedMarkers[i].active = !changedMarkers[i].active
      this.setState(prevState => ({
        show: !prevState.show,
        markers: changedMarkers,
        center: latLng,
        markerClicked: true,
        zoom: 17
      }));
    } else {
      this.resetMap(null, i)
    }
  }

  // markerClickReset = (i) => {
  //   let changedMarkers = [...this.state.markers]
  //   changedMarkers[i].animation = !changedMarkers[i].animation
  //   this.setState(prevState => ({
  //     show: !prevState.show,
  //     activeMarker: {},
  //     markers: changedMarkers,
  //     center: { lat: 48.8664771, lng: 2.3172632 },
  //     markerClicked: false,
  //     zoom: 14
  //   }));
  // }

  resetMap = (latLng, i) => {
    let changedMarkers = [...this.state.markers]
    changedMarkers[i].animation = !changedMarkers[i].animation
    changedMarkers[i].active = !changedMarkers[i].active
    this.setState({
      show: false,
      center: { lat: 48.8664771, lng: 2.3172632 },
      markers: changedMarkers,
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
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100vh`, width: `100vw` }} />}
          containerElement={<div style={{ height: `100vh`, width: `100vw` }} />}
          mapElement={<div style={{ height: `100vh`, width: `100vw` }} />}
          markers={this.state.markers}
          center={this.state.center}
          markerClicked={this.state.markerClicked}
          markerClick={this.markerClick}
          resetMap={this.resetMap}
          zoom={this.state.zoom}
        />
        <MarkersList
          clickHandler={this.clickHandler}
          markers={this.state.markers}
          markerClick={this.markerClick}
          filterMarkers={this.filterMarkers}
          resetMarkers={this.resetMarkers}
          filtered={this.state.filtered}
        />
        <Details
          show={this.state.show}
          reset={this.resetMap}
        />
      </Base>
    );
  }
}

export default Main;
