import React, { Component } from 'react';
//Foursquare keys import
import { F_CLIENT_ID, F_CLIENT_SECRET } from '../keys'
//Styled components import
import { Spinner, DetailsDiv } from '../styled-components'
//Variables
const fourLink = "https://foursquare.com/v/"


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