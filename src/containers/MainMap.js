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

// const KEY = "AIzaSyBKPusGfnzsW8wNouu-Jt5ECiA3k38DqHc";

// const MainMap = withScriptjs(withGoogleMap(props =>
//   <GoogleMap
//     defaultZoom={14}
//     defaultCenter={props.center}
//     defaultOptions={{ styles, disableDefaultUI: true }}
//   >
//   { 
//     props.markers.map((m, i) => 
//       <Marker
//         position={m.latLng}
//         key={i}
//         title={m.name}
//         animation={m.animation ? google.maps.Animation.BOUNCE : null}
//       />
//     )    
//   }
//   </GoogleMap>
// ));

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
            this.props.markerClickZoom(center, i)
          } else {
            this.props.resetMap()
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
