import React, { Component } from "react";
import styled, { css } from "styled-components";
import Condition from "../components/Condition";

const ListDiv = styled.div`
  width: 20%;
  background-color: white;
  position: absolute;
  left: 2rem;
  top: 5.5rem;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
  color: lightcoral;
  padding-top: 2%;
  box-sizing: border-box;
  font-family: "Comfortaa", cursive;

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

    ${props =>
      props.sidebar &&
      css`
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

    ${props =>
      props.sidebar &&
      css`
        display: block;
      `};
  }

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
    padding: 0.5rem;
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
    box-sizing: border-box;
  }

  & button.reset {
    margin: 1rem auto;
    display: block;
    color: white;
    background-color: lightcoral;
    border-radius: 0.2rem;
    border: none;
    padding: 0.5rem 0.9rem;
    cursor: pointer;
    width: 60%;
    max-height: 2rem;

    @media (max-width: 700px) {
      width: 50%;
    }
  }

  & button.hide {
    display: none;
    @media (max-width: 700px) {
      display: block;
      color: white;
      background-color: lightcoral;
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
      background-color: lightcoral;
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

const Marker = styled.li`
  list-decoration: none;
  color: gray;
  font-size: 1rem;
  margin: 1.5rem auto;
  display: block;
  width: 80%;
  cursor: pointer;
  user-select: none;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  ${props =>
    props.active &&
    css`
      color: lightcoral;
    `};
`;

const ShowMarkers = styled.div`
  display: none;
  @media (max-width: 900px) and (orientation: landscape) {
    position: absolute;
    background-color: lightcoral;
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
    ${props =>
      !props.showMarkers &&
      css`
        display: none;
      `};
  }

  @media (max-width: 700px) {
    position: absolute;
    background-color: lightcoral;
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
    ${props =>
      !props.showMarkers &&
      css`
        display: none;
      `};
  }
`;

class MarkersList extends Component {
  state = {
    query: "",
    sidebar: false,
    showMarkers: true
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.filterMarkers(this.state.query);
    this.setState({
      query: ""
    });
  };

  clickHandler = (center, i) => {
    if (!this.props.markerClicked) {
      this.props.markerClick(center, i);
      this.sidebarToggler();
    } else if (this.props.markerClicked && i !== this.props.activeIndex) {
      this.props.markerClick(center, i, this.props.activeIndex);
    } else {
      this.props.resetMap(i);
    }
  };

  sidebarToggler = () => {
    this.setState(prevState => ({
      sidebar: !prevState.sidebar,
      showMarkers: !prevState.showMarkers
    }));
  };

  render() {
    return (
      <>
        <ShowMarkers
          showMarkers={this.state.showMarkers}
          onClick={this.sidebarToggler}
        >
          MENU
        </ShowMarkers>
        <ListDiv sidebar={this.state.sidebar}>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={e =>
                this.setState({ query: e.target.value.toLowerCase() })
              }
              placeholder="Search"
              value={this.state.query}
            />
            <button type="submit">GO</button>
          </form>

          {
            this.props.markers.map((m, i) => (
              <Marker
                active={m.active}
                key={i}
                onClick={() => this.clickHandler(m.latLng, i)}
              >
                {m.name}
              </Marker>
            ))
          }
          <Condition test={this.props.filtered && !this.props.activeMarker}>
            <button className="reset" onClick={this.props.resetMarkers}>
              Reset Markers
            </button>
          </Condition>
          <Condition test={this.state.sidebar}>
            <button className="hide" onClick={this.sidebarToggler}>
              Hide Menu
            </button>
          </Condition>
        </ListDiv>
      </>
    );
  }
}

export default MarkersList;
