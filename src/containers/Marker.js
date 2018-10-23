import React, { Component } from 'react';
//styled-components import
import { MarkerS } from '../styled-components';


class Marker extends Component {
    
    liMarker = React.createRef();

    render() { 
        return (
            <MarkerS
                ref={this.liMarker}
                tabIndex="0"
                active={this.props.active}
                onClick={() => this.props.clickHandler(this.props.latLng, this.props.index)}
                onKeyUp={(e) => {if (e.which === 13) {this.liMarker.current.click()}}}
              >
                {this.props.name}
              </MarkerS>
        );
    }
}
 
export default Marker;