import React, { Component } from 'react';
import styled, { css } from 'styled-components'
//Variables import
import { fadeIn, fadeOut, coralColor } from '../utils'
//Foursquare keys import
import { F_CLIENT_ID, F_CLIENT_SECRET } from '../keys'
//Variables
const fourLink = "https://foursquare.com/v/"

const DetailsDiv = styled.div`
width: 30%;
background-color: white;
position: absolute;
right: 0;
padding-top: 1.3%;
top: 3.5rem;
height: calc(100% - 3.5rem);
box-shadow: 10px 10px 15px rgba(0,0,0,0.1);
color: gray;
box-sizing: border-box;
transition: all 2s;
z-index: 2;
animation: ${fadeIn} .3s ease 1;

${props => props.unmouting && css`
  animation: ${fadeOut} .3s ease 1;
`};

@media (max-width: 1024px) {
  width: 40%;
}

@media (max-width: 768px) {
  width: 50%;
}

@media (max-width: 700px) {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0;
  transform: translateY(0);
  box-shadow: none;
  padding-top: 0;
}

& button {
  margin: 5% auto 0;
  display: block;
  color: white;
  background-color: ${coralColor};
  border-radius: .2rem;
  border: none;
  padding: .5rem .9rem;
  cursor: pointer;
  font-size: 1rem;

  @media (max-width: 700px) {
    font-size: 1.2rem;
    margin: 10% auto 5%;
  }
}

& img {
  width: 90%;

  @media (max-width: 700px) {
    width: 100%;
    border-radius: 0;
  }
}

& div {
  text-align: center;
}

& .small {
  font-family: 'Comfortaa', cursive;
  font-size: .8rem;
}

& #title {
  font-size: 1.5rem;
  margin-bottom: -.3rem;
  margin-top: .3rem;
  color: ${coralColor}
}

& p {  
  padding: 0 5%;
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
border: 4px solid ${coralColor};
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
    venue: null,
    fetchOk: false,
    unmouting: false
  }

  componentDidMount() {
    this.fetchFoursquare()
    this.mainDiv.current.focus()   
  }

  componentDidUpdate(prevProps) {
    if (this.props.activeMarker !== prevProps.activeMarker) {
      this.setState({ fetchOk: false })
      this.fetchFoursquare()
      this.mainDiv.current.focus()
    }
  }

  createImg = (details) => {
    return `${details.prefix}500x500${details.suffix}`
  }

  fetchFoursquare = () => {
    const baseUrl = "https://api.foursquare.com/v2/venues/"
    const venId = this.props.activeMarker.foursquareId
    fetch(`${baseUrl}${venId}?&${F_CLIENT_ID}&${F_CLIENT_SECRET}&v=20180815&locale=en`)
      .then((res) => res.json())
      .then((res) => {
        let venue = {}
        venue.id = res.response.venue.id
        venue.img = res.response.venue.bestPhoto ?
          this.createImg(res.response.venue.bestPhoto)
          :
          this.createImg(res.response.venue.photos.groups[1].items[0])
        venue.likes = res.response.venue.likes.count
        venue.address = res.response.venue.location.formattedAddress[0]
        venue.rating = res.response.venue.rating
        this.setState({
          fetchOk: true,
          venue
        })
      })
      .catch(() => this.setState({ requestError: true }))
  }
  //Example response to avoid API calls
  // fetchExample = () => {
  //   let venue = {}
  //   venue.id = venueExample.id
  //   venue.img = venueExample.bestPhoto ?
  //     this.createImg(venueExample.bestPhoto)
  //     :
  //     this.createImg(venueExample.photos.groups[1].items[0])
  //   venue.likes = venueExample.likes.count
  //   venue.address = venueExample.location.formattedAddress[0]
  //   venue.rating = venueExample.rating
  //   this.setState({
  //     stopRequests: true,
  //     fetchOk: true,
  //     venue
  //   })
  // }

  closeDetails = (i) => {
    this.setState({ unmouting: true })
    setTimeout(() => {
      this.setState({ fetchOk: false })
      this.props.resetMap(i)
    }, 300)
  }

  conditionalRender = () => {
    if (this.state.requestError) {
      return (
        <div>
          <h1>&#9888;</h1>
          <p tabIndex="0">Ops! We couldn't connect to the internet right now, could you please check if it is ok?</p>
        </div>
      )
    } else if (this.state.fetchOk && this.props.activeMarker) {
      return (
        <>
          <div>
            <img
              tabIndex="0"
              src={this.state.venue.img}
              alt={this.props.activeMarker.name}
              aria-label="venue photo"
              //trap focus in the modal
              onKeyDown={(e) => { if (e.shiftKey && e.which === 9) this.closeButton.current.focus() }}
            />
            <p tabIndex="0" className="small">{`${this.state.venue.likes} likes on `}<a target="blank" href={`${fourLink}${this.state.venue.id}`}>Foursquare</a></p>
            <p tabIndex="0" className="small">{`Rating ${this.state.venue.rating}/10`}</p>
            <p id="title">{this.props.activeMarker.name}</p>
            <p tabIndex="0" aria-label={`address: ${this.state.venue.address}`} className="small">{this.state.venue.address}</p>
          </div>
          <p tabIndex="0">{this.props.activeMarker && this.props.activeMarker.desc}</p>
          <button
            ref={this.closeButton}
            aria-label="close details"
            //trap focus in the modal
            onKeyDown={(e) => { if (e.which === 9) { this.mainDiv.current.focus() } }}
            onClick={() => this.closeDetails(this.props.activeIndex)}>
            Close
          </button>
        </>
      )
    } else {
      return (
        <div>
          <Spinner><div></div><div></div></Spinner>
          <p>Please wait...</p>
        </div>
      )
    }
  }

  closeButton = React.createRef()
  mainDiv = React.createRef()

  render() {
    return (
      <DetailsDiv
      ref={this.mainDiv}
      tabIndex="0" aria-label={`Details for ${this.props.activeMarker.name}`}
      show={this.props.show}
      unmouting={this.state.unmouting}>
        {
          this.conditionalRender()
        }
      </DetailsDiv>
    );
  }
}

export default Details;