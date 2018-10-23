import React, { Component } from "react";
import styled, { css } from "styled-components";
//Components import
import Condition from "../components/Condition";
//Containers import
import Marker from './Marker';
//Variables import
import { fadeIn, coralColor } from "../utils";

const ListDiv = styled.div`
  width: 20%;
  background-color: white;
  position: absolute;
  left: 2rem;
  top: 5.5rem;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
  color: ${coralColor};
  padding: 1% 0;
  box-sizing: border-box;
  font-family: "Comfortaa", cursive;
  animation: ${fadeIn} .9s ease 1;
  text-align: center;

  @media (max-width: 1024px) {
    width: 25%;
  }

  @media (max-width: 900px) {
    width: 35%;
  }

  @media (max-width: 900px) and (orientation: landscape) {
    display: none;
    width: 100%;
    height: calc(100% - 3.5rem);
    top: 3.5rem;
    left: 0;
    border: none;
    border-radius: 0;
    transform: translateX(0);
    padding-top: 7%;
    box-shadow: none;

    ${props => props.sidebar && css`
        display: block;
    `};
  }

  @media (max-width: 700px) {
    display: none;
    width: 100%;
    height: calc(100% - 3.5rem);
    top: 3.5rem;
    left: 0;
    border: none;
    border-radius: 0;
    transform: translateX(0);
    padding-top: 7%;
    box-shadow: none;

    ${props => props.sidebar && css`
        display: block;
    `};
  }

  & label {
    color: ${coralColor};
    font-size: .7rem;

    @media (max-width: 1200px) {
      font-size: .6rem;
    }
  }

  & form {
    display: block;
    margin: 0 auto;
    width: 80%;
    height: 2rem;
  }

  & ul {
    text-align: left;
    margin: 0;
    padding: 0;

    &:focus {
      border: none;
      outline: none;
    }
  }

  & input {
    margin: 0 auto;
    display: inline-block;
    width: 80%;
    height: 100%;
    border: 1px solid ${coralColor};
    background-color: white;
    padding: 0.5rem;
    box-sizing: border-box;
  }

  & button {
    margin: 0;
    width: 20%;
    display: inline-block;
    color: white;
    background-color: ${coralColor};
    border: none;
    cursor: pointer;
    height: 100%;
    box-sizing: border-box;
    font-weight: 700;
  }

  & button.reset {
    margin: 1rem auto;
    display: block;
    color: white;
    background-color: ${coralColor};
    border-radius: 0.2rem;
    border: none;
    padding: 0.5rem 0.9rem;
    cursor: pointer;
    width: 50%;
    max-height: 2rem;

    @media (min-width: 1441px) {
      width: 35%;
    }

    @media (max-width: 700px) {
      width: 50%;
    }
  }

  & button.hide {
    display: none;

    @media (max-width: 700px) {
      display: block;
      color: white;
      background-color: ${coralColor};
      border-radius: 0.2rem;
      border: none;
      padding: 0.5rem 0.9rem;
      cursor: pointer;
      width: 50%;
      max-height: 2rem;
      margin: 1rem auto;
    }

    @media (max-width: 900px) and (orientation: landscape) {
      display: block;
      color: white;
      background-color: ${coralColor};
      border-radius: 0.2rem;
      border: none;
      padding: 0.5rem 0.9rem;
      cursor: pointer;
      width: 30%;
      max-height: 2rem;
      margin: 1rem auto;
    }
  }
`;

const ShowMarkers = styled.div`
  display: none;

  @media (max-width: 900px) and (orientation: landscape) {
    position: absolute;
    background-color: ${coralColor};
    color: white;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: 30%;
    text-align: center;
    padding: 2%;
    box-sizing: border-box;
    margin: 0 auto;
    border-radius: 0.5rem;
    ${props => !props.showMarkers && css`
        display: none;
    `};
  }

  @media (max-width: 700px) {
    position: absolute;
    background-color: ${coralColor};
    color: white;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: 40%;
    text-align: center;
    padding: 2%;
    box-sizing: border-box;
    margin: 0 auto;
    border-radius: 0.5rem;

    ${props => !props.showMarkers && css`
        display: none;
    `};
  }
`;

class MarkersList extends Component {
  state = {
    query: "",
    sidebar: false,
    showMarkers: true,
    filtered: false,
    listLabel: "highlights list"
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.filterMarkers(this.state.query);
    this.props.ulRef.current.focus()
    this.setState({
      query: "",
      filtered: true,
      listLabel: "filtered highlights list"
    });
  };

  clickHandler = (center, i) => {
    if (!this.props.markerClicked) {
      this.props.markerClick(center, i);
      this.sidebarToggler();
    } else if (this.props.markerClicked && i !== this.props.activeIndex) {
      //handles the case where the user dont reset the map and clicks on another pin
      this.props.markerClick(center, i, this.props.activeIndex);
    } else {
      //If there is a marker clicked and the index is the same, it means that the user
      //clicked on the same pin, so the map is reset
      this.props.resetMap(i);
    }
  };

  sidebarToggler = () => {
    this.setState(prevState => ({
      sidebar: !prevState.sidebar,
      showMarkers: !prevState.showMarkers
    }));
  };

  tabTrapper = (key, reset) => {
    if(!this.state.filtered) {
      //while not filtered, a tab press on the go button should bring the focus back to the list
      if (key === 9) {this.props.ulRef.current.focus()}
    }
    if(reset) {
      //if it is the reset button, the focus should also go back to the list
      if (key === 9) {this.props.ulRef.current.focus()}
    }
  }

  render() {
    return (
      <>
        <ShowMarkers
        //Menu item showed only on small screens
          showMarkers={this.state.showMarkers}
          onClick={this.sidebarToggler}
          aria-label="open highlights sidebar"
        >
          MENU
        </ShowMarkers>
        <ListDiv id="markers" sidebar={this.state.sidebar}>
          <ul aria-label={this.state.listLabel} tabIndex="0" ref={this.props.ulRef}>
          {
            this.props.markers.length === 0 ?
            <Marker name="Sorry, no results..."></Marker>
            :
              this.props.markers.map((m, i) => (
                <Marker
                  active={m.active}
                  index={i}
                  key={m.id}
                  clickHandler={this.clickHandler}
                  latLng={m.latLng}
                  name={m.name}
                />
              ))
          }
          </ul>
          <label htmlFor="searchInput">Search Markers or select one from the list</label>
          <form onSubmit={this.handleSubmit}>
            <input
              id="searchInput"
              tabIndex="0"              
              type="text"
              ref={this.props.searchRef}
              onChange={e =>
                this.setState({ query: e.target.value.toLowerCase() })
              }
              placeholder="Search"
              value={this.state.query}
            />
            <button
            onKeyDown={(e) => this.tabTrapper(e.which)}
            aria-label="search highlights"
            type="submit"
            >
              GO
            </button>
          </form>
          <Condition test={this.props.filtered && !this.props.activeMarker}>
            <button
            onKeyDown={(e) => this.tabTrapper(e.which, true)}
            className="reset"
            onClick={() => {
              this.setState({ filtered: false, listLabel: "highlights list" })
              this.props.resetMarkers()
            }}
              >
              Reset Markers
            </button>
          </Condition>
          <Condition test={this.state.sidebar}>
            <button aria-label="close highlights sidebar" className="hide" onClick={this.sidebarToggler}>
              Hide Menu
            </button>
          </Condition>
        </ListDiv>
      </>
    );
  }
}

export default MarkersList;
