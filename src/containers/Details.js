import React, { Component } from 'react';
import styled, { css } from 'styled-components'
//Foursquare keys import
import { F_CLIENT_ID, F_CLIENT_SECRET } from '../keys'

const DetailsDiv = styled.div`
width: 20%;
background-color: white;
position: absolute;
right: 8%;
top: 10%
transform: translateX(8%);
border-radius: .5rem;
box-shadow: 15px 15px 15px rgba(0,0,0,0.05);
color: lightcoral;
padding: 2%;
box-sizing: border-box;
transition: all .5s;
opacity: 1;

${props => !props.show && css`
  display: none;
`};

& button {
  margin: 0 auto;
  display: block;
  color: white;
  background-color: lightcoral;
  border-radius: .2rem;
  border: none;
  padding: .5rem .9rem;
  cursor: pointer;
}

& img {
  width: 95%;
}
& div {
  text-align: center;
}
& #likes {
  color: gray;
  font-family: 'Comfortaa', cursive;
  font-size: .8rem;
}
`
const Spinner = styled.div`

display: block;
margin: 1rem auto;
position: relative;
width: 64px;
height: 64px;

& div {
position: absolute;
border: 4px solid lightcoral;
opacity: 1;
border-radius: 50%;
animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

& div:nth-child(2) {
  animation-delay: -0.5s;
}

@keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}
`

class Details extends Component {

  state = {
    activeMarker: null,
    image: null,
    request: null,
    likes: null,
    similar: null,
    fetchOk: false
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        activeMarker: this.props.activeMarker,
        activeIndex: this.props.activeIndex,
        stopRequests: null
      })
    }
    if (this.state.activeMarker && !this.state.stopRequests) {
      //
      let similarAndLikes = {}
      let venue = this.state.activeMarker.name
      //
      const baseUrl = "https://api.foursquare.com/v2/venues/"
      //
      fetch(`${baseUrl}search?near=paris,france&${F_CLIENT_ID}&${F_CLIENT_SECRET}&v=20180815&query=${venue}&limit=1`)
        .then((res) => res.json())
        .then((res) => {
          let venId = res.response.venues[0].id
          fetch(`${baseUrl}${venId}/similar?&${F_CLIENT_ID}&${F_CLIENT_SECRET}&v=20180815`)
            .then((res) => res.json())
            .then((res) => {
              similarAndLikes.similar = res.response.similarVenues.items
            })
            .then(() => {
              fetch(`${baseUrl}${venId}/likes?&${F_CLIENT_ID}&${F_CLIENT_SECRET}&v=20180815`)
                .then((res) => res.json())
                .then((res) => {
                  similarAndLikes.likes = res.response.likes.count
                  this.setState({
                    // image: `${res.response.venue.bestPhoto.prefix}original${res.response.venue.bestPhoto.suffix}`
                    stopRequests: true,
                    similar: similarAndLikes.similar,
                    likes: similarAndLikes.likes,
                    fetchOk: true
                  })
                })
            })
            // .then(() => {
            //   fetch(`${baseUrl}${venId}?&${F_CLIENT_ID}&${F_CLIENT_SECRET}&v=20180815`)
            // })
            // .then((res) => res.json())
            // .then((res) => console.log(res))
            .catch(() => console.log("error"))
        })
    }
  }



  render() {
    const state = this.state
    console.log(state)
    return (
      <DetailsDiv show={this.props.show}>
        {
          this.state.fetchOk ?
            <>
              <div>
                <img src="https://via.placeholder.com/300" alt="" />
                <p id="likes">{`${state.likes} likes on Foursquare`}</p>
              </div>
              <p>{this.props.activeMarker.name}</p>
              <p>{this.props.activeMarker.desc}</p>
              <button onClick={() => this.props.resetMap(this.props.activeIndex)}>Back</button>
            </>
            :
            <>
              <Spinner><div></div><div></div></Spinner>
              <p>Loading...</p>
            </>
        }
      </DetailsDiv>
    );
  }
}

export default Details;