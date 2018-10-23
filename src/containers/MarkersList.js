import React, { Component } from "react";
//Components import
import Condition from "../components/Condition";
//Containers import
import Marker from './Marker';
//Styled Components import
import { ShowMarkers, ListDiv } from '../styled-components'


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
