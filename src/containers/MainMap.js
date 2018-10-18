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
    defaultCenter={{ lat: 48.8581332, lng: 2.2936499 }}
  >
    <Marker
      position={{ lat: 48.8581332, lng: 2.2936499 }}
    />
  </GoogleMap>
));

export default MainMap;
