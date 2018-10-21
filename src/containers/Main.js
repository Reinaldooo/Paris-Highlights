import React, { Component } from 'react';
import styled from 'styled-components'
//Components Import
import Logo from '../components/Logo'
//containers import
import MarkersList from './MarkersList'
import Details from './Details'
import MainMap from './MainMap'
//Utils import
import { markers, defaultMarkers } from '../utils'
import { MAPSKEY as KEY } from '../keys'

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
    markerClicked: false,
    activeMarker: null,
    activeIndex: null,
    center: { lat: 48.8664771, lng: 2.3172632 },
    zoom: 14,
    filtered: false,
    markers,
  }

  markerClick = (latLng, i, oldIndex) => {    
    if (!this.state.markerClicked) {
      //handles first click
      let changedMarkers = [...this.state.markers]
      changedMarkers[i].animation = !changedMarkers[i].animation
      changedMarkers[i].active = !changedMarkers[i].active
      this.setState(prevState => ({
        show: !prevState.show,
        markers: changedMarkers,
        activeMarker: prevState.markers[i],
        activeIndex: i,
        center: latLng,
        markerClicked: true,
        zoom: 17
      }));
      //Old index means that the user didnt reset the map and clicked other pin
    } else if (oldIndex !== undefined){
      let changedMarkers = [...this.state.markers]
      changedMarkers[i].animation = !changedMarkers[i].animation
      changedMarkers[i].active = !changedMarkers[i].active
      changedMarkers[oldIndex].animation = !changedMarkers[oldIndex].animation
      changedMarkers[oldIndex].active = !changedMarkers[oldIndex].active
      this.setState(prevState => ({
        markers: changedMarkers,
        activeMarker: prevState.markers[i],
        activeIndex: i,
        center: latLng,
        markerClicked: true,
        zoom: 17
      }));
    } else {
      //in case the user clicks on the same marker or list item    
      this.resetMap(i)
    }
  }

  resetMap = (i) => {
    let changedMarkers = [...this.state.markers]
    changedMarkers[i].animation = !changedMarkers[i].animation
    changedMarkers[i].active = !changedMarkers[i].active
    this.setState({
      show: false,
      center: { lat: 48.8664771, lng: 2.3172632 },
      markers: changedMarkers,
      markerClicked: false,
      zoom: 14,
      activeMarker: null,
      activeIndex: null
    });
  }

  filterMarkers = (query) => {
    this.setState({
      markers: defaultMarkers.filter((m) => m.name.toLowerCase().includes(query)),
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
          containerElement={<div role="application" style={{ height: `100vh`, width: `100vw` }} />}
          mapElement={<div style={{ height: `100vh`, width: `100vw` }} />}
          markers={this.state.markers}
          center={this.state.center}
          markerClicked={this.state.markerClicked}
          markerClick={this.markerClick}
          activeIndex={this.state.activeIndex}
          resetMap={this.resetMap}
          zoom={this.state.zoom}          
        />
        <MarkersList
          clickHandler={this.clickHandler}
          markers={this.state.markers}
          markerClick={this.markerClick}
          filterMarkers={this.filterMarkers}
          resetMarkers={this.resetMarkers}
          activeMarker={this.state.activeMarker}
          filtered={this.state.filtered}
        />
        <Details
          show={this.state.show}
          resetMap={this.resetMap}
          activeMarker={this.state.activeMarker}
          activeIndex={this.state.activeIndex}
        />
      </Base>
    );
  }
}

export default Main;
