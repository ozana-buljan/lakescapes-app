/* *** *** *** IMPORTS *** *** *** */
/* React */
import React, { Component } from "react";
/*React-Materialize CSS npm*/
//src: https://react-materialize.github.io/
import {Button, Icon, SideNav, SideNavItem, Row, Col, Input } from 'react-materialize';
/*Local Components*/
import MapContainer from "../Main/MapContainer";
import ToggleAsideBtn from '../Header/ToggleAsideBtn';

import {
    allPlaces,
    culturePlaces,
    beachPlaces,
    naturePlaces,
    foodPlaces,
    funPlaces,
    shoppingPlaces
} from "../../lib/places.js";

/* *** *** *** COMPONENT*** *** *** */
class Aside extends Component {
  constructor(props){
    super(props);
      this.state = {
    locations: [],
  };
  }
  /*
   * @description searchLocations() -> Input search on map markers
   */
  searchLocations = e => {
    const { value } = e.target;
    const { markers, closeInfoWindow } = this.props;

    //first close all open infoWindows
    closeInfoWindow();

    const filteredLocations = markers.filter(location => {
      // RegExp to match the value if it contains in string
      // gi = global and case insensitive
      const strToMatch = new RegExp(value, "gi");
      if (location.title.match(strToMatch)) {
        location.setVisible(true);
      } else {
        location.setVisible(false);
      }

      return location.title.match(strToMatch);
    });

    // Update locations state with filtered locations
    this.setState({ locations: filteredLocations });

      }

//TODO-> update the list on click of the button too (now only input search updates it)

  render() {
    const { openInfoWindow } = this.props;
    const { locations } = this.state;

    return (
      <SideNav  trigger={<Button>SIDE NAV</Button>} id="wrapper-aside" options={{ closeOnClick: true }}>

            <a href="#" className="right" id="close-btn"><Icon>clear</Icon>
            </a>
            <h2 tabIndex="1">Explore Bregenz</h2>

             <Button
          id="show-button"
         tooltip="Show all locations"
          aria-label="Show all locations"
          tabIndex="1"
        onClick={() => { this.props.filterMarkers('show-button')}}
             >
                 <Icon>visibility</Icon>
             </Button>

            <Button
         id="hide-button"
          tooltip="Hide all locations"
          aria-label="Hide all locations"
          tabIndex="1"
         onClick={this.props.hideMarkers}
            >
                <Icon>visibility_off</Icon>
            </Button>

         <div id="filter">
               <h4>Filter locations</h4>
             <Button
             id="filter-culture"
             tooltip="Culture"
             className="option"
             // eventKey="culture"
              aria-label="Find places of culture and sights"
              ////OVDJE sam htjela napravit plug-in  - i tak an svakom gumbu
               onClick={() => { this.props.filterMarkers('filter-culture')}}
            >
             <Icon large>location_city</Icon>
              </Button>
               <Button id="filter-food"
                  tooltip="Restaurants & Cafes" className="option"
              eventKey="food" aria-label="Find restaurants and cafes"
                        onClick={() => { this.props.filterMarkers('filter-food')}}
               >
                   <Icon>local_dining</Icon>
               </Button>
               <Button id="filter-fun"
                   tooltip="Fun"
                    className="option"
              eventKey="fun" aria-label="Find bars and entertainment"
                        onClick={() => { this.props.filterMarkers('filter-fun')}}
               >
                    <Icon>local_activity</Icon>
               </Button>
                   <Button id="filter-shopping"
                      tooltip="Shopping"
                       className="option"
              eventKey="shopping" aria-label="Find shops"
                            onClick={() => { this.props.filterMarkers('filter-shopping')}}
                   >
                       <Icon>local_grocery_store</Icon>
                   </Button>
                 <Button id="filter-beach"
                     tooltip="Beach"
                      className="option"
              eventKey="beach" aria-label="Find beaches"
                         onClick={() => { this.props.filterMarkers('filter-beach')}}
                 >
                      <Icon>beach_access</Icon>
                 </Button>
               <Button id="filter-nature"
               tooltip="Nature"
                className="option"
              eventKey="culture" aria-label="Find parks and nature"
                        onClick={() => { this.props.filterMarkers('filter-nature')}}
               >
               <Icon>local_florist</Icon></Button>
            </div>

         <Input
          type="text"
          placeholder="Search"
          onChange={this.searchLocations}
          aria-label="Search places"
          tabIndex="1"
        />

        <ul role="list" aria-label="Venues" tabIndex="1">
          {locations.map((marker, index) => (
            <li
              tabIndex="1"
              role="listitem"
              key={index}
              onClick={() => openInfoWindow(marker)}
               onChange={this.searchLocations}

            >
              {marker.title}
            </li>
          ))}
        </ul>
        </SideNav>
    );
  }
}

/* *** *** *** Export *** *** *** */
export default Aside;
