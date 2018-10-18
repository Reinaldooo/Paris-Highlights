import React from "react";
// import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

// const KEY = "AIzaSyBKPusGfnzsW8wNouu-Jt5ECiA3k38DqHc";

const MainMap = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 48.85837009999999, lng: 2.2944813 }}
  >
    <Marker
      position={{ lat: 48.85837009999999, lng: 2.2944813 }}
    />
    <Marker
      position={{ lat: 48.8606111, lng: 2.337644 }}
    />
    <Marker
      position={{ lat: 48.85296820000001, lng: 2.3499021 }}
    />
    <Marker
      position={{ lat: 48.8737917, lng: 2.2950275 }}
    />
    <Marker
      position={{ lat: 48.8865473, lng: 2.3431221 }}
    />
    <Marker
      position={{ lat: 48.846191, lng: 2.346079 }}
    />
    <Marker
      position={{ lat: 48.868931, lng: 2.310340 }}
    />
    <Marker
      position={{ lat: 48.857037, lng: 2.311878 }}
    />
    <Marker
      position={{ lat: 48.863788, lng: 2.313546 }}
    />
    <Marker
      position={{ lat: 48.846384, lng: 2.336750 }}
    />
  </GoogleMap>
));

export default MainMap;
