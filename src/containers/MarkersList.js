import React, { Component } from 'react';
import styled, { css } from 'styled-components'

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
border: solid 2px lightgray;

& form {
  display: block;
  margin: 0 auto;
  width: 80%;
  height: 2rem;
}

& input {
  margin: 0 auto;
  display: inline-block;
  width: 80%;
  height: 100%;
  border: 1px solid lightcoral;
  background-color: white;
  border-top-left-radius: .2rem;
  border-bottom-left-radius: .2rem;
  padding: .5rem;
  box-sizing: border-box;
}

& button {
  margin: 0;
  width: 20%;
  display: inline-block;
  color: white;
  background-color: lightcoral;
  border: none;
  cursor: pointer;
  height: 100%;
  border-top-right-radius: .2rem;
  border-bottom-right-radius: .2rem;
  box-sizing: border-box;
}


& button.reset {
  margin: 0 auto;
  display: block;
  color: white;
  background-color: lightcoral;
  border-radius: .2rem;
  border: none;
  padding: .5rem .9rem;
  cursor: pointer;
  width: 35%;
}
`

const A = styled.a`
text-decoration: none;
color: gray;
font-size: 1.2rem;
margin: 1rem auto;
display: block;
width: 80%;
cursor: pointer;
user-select: none;

${props => props.active && css`
  color: lightcoral;
  font-size: 1.4rem
`};

`

class MarkersList extends Component {
  state = {
    query: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.filterMarkers(this.state.query)
  }

  render() {
    return (
      <ListDiv>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={(e) => this.setState({ query: e.target.value.toLowerCase() })}
            placeholder="Search"
            value={this.state.query}
          />
          <button type="submit">GO</button>
        </form>

        {
          this.props.markers.map((m, i) =>
            <A active={m.active} key={i} onClick={() => this.props.markerClick(m.latLng, i)}>{m.name}</A>
          )
        }
        {(this.props.filtered && !this.props.activeMarker) &&
          <button className="reset" onClick={this.props.resetMarkers}>Reset Markers</button>
        }
      </ListDiv>
    );
  }
}

export default MarkersList;