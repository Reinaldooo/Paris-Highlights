import React, { Component } from 'react';
import styled from 'styled-components'
//Components Import
import Logo from '../components/Logo'
import Condition from '../components/Condition'
//containers import
import MarkersList from './MarkersList'
import Details from './Details'
import MainMap from './MainMap'
//Variables import
import { markers, defaultMarkers, coralColor } from '../utils'
import { MAPSKEY as KEY } from '../keys'

const Base = styled.div`
width: 100vw;
height: 100vh;
display: flex;
background-color: lightgray
color: white;
box-sizing: border-box;
`

const SkipLink = styled.a`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  /* added line */
  border: 0;
`

const MapErrorDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: center;
  color: ${coralColor};

  & h2 {
    width: 80%;
    margin: .2rem auto;
  }
`
//Calculate zoom and center based on screen sizes
const width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

const calculateZoom = () => {
  if (width < 700) {
    return 12.75
  } else if (width > 700 && width < 1500) {
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
    authError: false,
    markers,
  }

  componentDidMount() {
    window.gm_authFailure = () => {
      this.setState({ authError: true });
    }
  }

  markerClick = (latLng, i, oldIndex) => {
    if (!this.state.markerClicked) {
      //handles first click
      let changedMarkers = [...this.state.markers]
      changedMarkers[i] = {
        ...changedMarkers[i],
        animation: !changedMarkers[i].animation,
        active: !changedMarkers[i].active
      }
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
    } else if (oldIndex !== undefined) {
      let changedMarkers = [...this.state.markers]
      //animate and activate new pin
      changedMarkers[i] = {
        ...changedMarkers[i],
        animation: !changedMarkers[i].animation,
        active: !changedMarkers[i].active
      }
      //reset oldpin
      changedMarkers[oldIndex] = {
        ...changedMarkers[oldIndex],
        animation: !changedMarkers[oldIndex].animation,
        active: !changedMarkers[oldIndex].active
      }
      this.setState(prevState => ({
        markers: changedMarkers,
        activeMarker: prevState.markers[i],
        activeIndex: i,
        center: latLng,
        markerClicked: true,
        zoom: 17,
      }));
    } else {
      //in case the user clicks on the same marker or list item    
      this.resetMap(i)
    }
  }

  resetMap = (i) => {
    if (this.state.filtered) {
      let changedMarkers = [...this.state.markers]
      changedMarkers[i] = {
        ...changedMarkers[i],
        animation: !changedMarkers[i].animation,
        active: !changedMarkers[i].active
      }
      this.setState({
        //while filtered, markers shouldnt be reset
        show: false,
        markerClicked: false,
        activeMarker: null,
        activeIndex: null
      });
    } else {
      let changedMarkers = [...this.state.markers]
      changedMarkers[i] = {
        ...changedMarkers[i],
        animation: !changedMarkers[i].animation,
        active: !changedMarkers[i].active
      }
      this.setState({
        show: false,
        markers: changedMarkers,
        markerClicked: false,
        activeMarker: null,
        activeIndex: null
      });
    }
    this.ulRef.current.focus()
  }

  searchRef = React.createRef()
  ulRef = React.createRef()
  errorDiv = React.createRef()

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
    this.ulRef.current.focus()
  }

  conditionalRender = () => {
    if (this.state.authError) {
      return (
        <MapErrorDiv tabIndex="0" ref={this.errorDiv}>
          <h2>Sorry, we're having a problem loading the map, could you please reload the page?</h2>
          <h2>If the problem persists, please try again later.</h2>
        </MapErrorDiv>
      )
    } else {
      return (
        <>
          <SkipLink
            tabIndex="0"
            onKeyUp={(e) => { if (e.which === 13) { this.ulRef.current.focus() } }}
          >
            Go to search highlights
          </SkipLink>
          <MainMap
            //Maps API settings start
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${KEY}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%`, width: `100%` }}/>}
            containerElement={<div role="application" tabIndex="-1" style={{ height: `100%`, width: `100%` }} />}
            mapElement={<div role="application" tabIndex="-1" style={{ height: `100%`, width: `100%` }} />}
            markers={this.state.markers}
            center={this.state.center}
            //Maps API settings end
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
            searchRef={this.searchRef}
            ulRef={this.ulRef}
          />
          <Condition test={this.state.show}>
            <Details
              show={this.state.show}
              resetMap={this.resetMap}
              activeMarker={this.state.activeMarker}
              activeIndex={this.state.activeIndex}
            />
          </Condition>
        </>
      )
    }
  }


  render() {
    return (
      <Base>
        <Logo />
        {
          this.conditionalRender()
        }
      </Base>
    );
  }
}

export default Main;
