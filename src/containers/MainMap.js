/* eslint-disable no-undef */
import React from "react";
import { styles } from '../utils';
import { compose, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MainMap = compose(
  lifecycle({
    componentDidMount() {
      this.setState({
        center: this.props.center,
        markers: this.props.markers,
        zoom: this.props.zoom,
        clicked: this.props.markerClicked,
        markerClick: (center, i) => {
          if (!this.state.clicked) {
            this.props.markerClick(center, i)
          } else {
            this.props.resetMap(null, i)
          }
        }
      })
    },
    componentDidUpdate(prevProps) {
      if (this.props!==prevProps) {
        this.setState({
          center: this.props.center,
          zoom: this.props.zoom,
          clicked: this.props.markerClicked,
          markers: this.props.markers
        })
      }
    }
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={props.zoom}
    zoom={props.zoom}
    center={props.center}
    defaultOptions={{ styles, disableDefaultUI: true }}
  >
    {props.markers.map((marker, index) =>
      <Marker
        key={index}
        position={marker.latLng}
        title={marker.name}
        animation={marker.animation ? google.maps.Animation.DROP : null}
        onClick={() => props.markerClick(marker.latLng, index)}
      />
    )}
  </GoogleMap>
);

export default MainMap;
