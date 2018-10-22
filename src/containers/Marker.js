import React, { Component } from 'react';
import styled, { css } from 'styled-components';
//Variables import
import { coralColor, grayColor } from '../utils'

const MarkerS = styled.li`
  list-decoration: none;
  color: ${grayColor};
  font-size: 1rem;
  margin: 1.5rem auto;
  display: block;
  width: 80%;
  cursor: pointer;
  user-select: none;
  padding: 0 .8rem;

  &:focus {
    border: solid 2px ${coralColor};
    border-radius: .2rem;
    outline: none;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  ${props => props.active && css`
      color: ${coralColor};
  `};
`;

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