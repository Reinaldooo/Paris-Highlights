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
box-sizing: border-box;
`

const width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

const calculateZoom = () => {
  console.log(width)
  if (width < 700) {
    return 12.75
  } else if (width > 700 && width < 1500){
    return 13
  } else {
    return 14
  }
}
const calculateCenter = () => {
  if (width < 700) {
    return { lat: 48.8664771, lng: 2.3232632 }
  } else {
    return { lat: 48.8664771, lng: 2.3172632 }
  }
}

class Main extends Component {
  state = {
    show: false,
    markerClicked: false,
    activeMarker: null,
    activeIndex: null,
    center: calculateCenter(),
    zoom: calculateZoom(),
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
    if(this.state.filtered) {
      let changedMarkers = [...this.state.markers]
      changedMarkers[i].animation = !changedMarkers[i].animation
      changedMarkers[i].active = !changedMarkers[i].active
      this.setState({
        show: false,
        markerClicked: false,
        activeMarker: null,
        activeIndex: null
      });
    } else {
      let changedMarkers = [...this.state.markers]
      changedMarkers[i].animation = !changedMarkers[i].animation
      changedMarkers[i].active = !changedMarkers[i].active
      this.setState({
        show: false,
        markers: changedMarkers,
        markerClicked: false,
        activeMarker: null,
        activeIndex: null
      });
    }
  }

  filterMarkers = (query) => {
    this.setState({
      markers: defaultMarkers.filter((m) => m.name.toLowerCase().includes(query)),
      center: { lat: 48.8664771, lng: 2.3172632 },
      zoom: 14,
      filtered: true,
      markerClicked: false,
      activeMarker: null,
      activeIndex: null,
      show: false
    })
  }

  resetMarkers = () => {
    this.setState({
      markers: [...defaultMarkers],
      filtered: false
    })
  }

  
  render() {
    return (
      <Base>
        <Logo />
        <MainMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%`, width: `100%` }} />}
          containerElement={<div role="application" style={{ height: `100%`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%`, width: `100%` }} />}
          markers={this.state.markers}
          center={this.state.center}
          markerClicked={this.state.markerClicked}
          markerClick={this.markerClick}
          activeIndex={this.state.activeIndex}
          resetMap={this.resetMap}
          zoom={this.state.zoom}          
        />
        <MarkersList
          markers={this.state.markers}
          markerClicked={this.state.markerClicked}
          markerClick={this.markerClick}
          activeIndex={this.state.activeIndex}
          filterMarkers={this.filterMarkers}
          resetMarkers={this.resetMarkers}
          activeMarker={this.state.activeMarker}
          filtered={this.state.filtered}
          resetMap={this.resetMap}
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
