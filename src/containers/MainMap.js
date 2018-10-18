import React from "react";
import { styles } from '../utils';
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
    defaultCenter={{ lat: 48.8664771, lng: 2.3172632 }}
    defaultOptions={{ styles, disableDefaultUI: true }}
  >
  {
    props.markers.map((m, i) => 
      <Marker
        position={m.latLng}
        key={i}
      />
    )    
  }
  </GoogleMap>
));

export default MainMap;
