import React, { Component } from 'react';
import styled from 'styled-components'

const ListDiv = styled.div`
width: 20%;
background-color: white;
position: absolute;
left: 8%;
top: 10%
transform: translateX(-8%);
border-radius: .5rem;
box-shadow: 15px 15px 15px rgba(0,0,0,0.05);
color: lightcoral;
padding: 1% 0;
box-sizing: border-box;

& input {
  margin: 0 auto;
  display: block;
  width: 80%;
  height: 1rem;
  border: 1px solid lightcoral;
  background-color: white;
  border-radius: .2rem;
  padding: .5rem;
}

& li {
  list-style: none;
  font-size: 1.5rem;
  margin: 1rem auto;
  display: block;
  width: 80%;
}
`

class MarkersList extends Component {
  state = {
    markers: ["marker1", "marker2", "marker3", "marker4", "marker5", "marker6", "marker7", "marker8", "marker9", "marker10"],
  }
  render() {
    return (
      <ListDiv>
        <input type="text" placeholder="Search" />
        {this.state.markers.map((m, i) => <li key={i}>{m}</li>)}
        <li onClick={this.props.click} style={{ color: `black`, cursor: "pointer" }}>Mostrar Detalhes</li>
      </ListDiv>
    );
  }
}

export default MarkersList;