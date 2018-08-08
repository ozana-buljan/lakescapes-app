/* *** *** *** IMPORTS *** *** *** */
/* React */
import React, { Component, PropTypes } from "react";

/*React-Materialize CSS npm*/
//src: https://react-materialize.github.io/
import {Button, Icon, SideNav,  Row, Col, Input } from 'react-materialize';
import atFlag from "../../Images/flag.png"
import foursquareIMG from "../../Images/foursquare2.png";

/* *** *** *** COMPONENT*** *** *** */
export class Aside extends Component {
  constructor(props){
    super(props);
      this.state = {
        search: '',
        isHidden: false,
  };
  }
    /*
   * @description  filerLocationBySearch() -> Input search on map markers
   */
  filerLocationBySearch = (locations, searchBy) =>
    locations.filter(location => {
      // RegExp to match the value if it contains in string
      // gi = global and case insensitive
      const strToMatch = new RegExp(searchBy, "gi");
      if (location.title.match(strToMatch)) {
        location.setVisible(true);
      } else {
        location.setVisible(false);
      }

      return location.title.match(strToMatch);
    });

     /*
   * @description searchLocations() -> updates locations list
   */
  searchLocations = e => {
    const { value } = e.target;
    const { closeInfoWindow } = this.props;
    //first close all open infoWindows
    closeInfoWindow();

    // Update locations state with filtered locations
    this.setState({ search: value });
  };

 /*
   @description hideMarkersHandler() -> hides markers on click on hide button
   */
  hideMarkersHandler = () => {
    this.setState({ isHidden: true });
    this.props.hideMarkers();
  };
 /*
   @description showMarkersHandler() -> shows markers on click on hide button
   */
  showMarkersHandler = () => {
    this.setState({ isHidden: false });
    this.props.filterMarkers('show-button');
  };

//TODO-> update the list on click of the button too (now only input search updates it)

  render() {
    const { openInfoWindow, markers } = this.props;
    const { search, isHidden } = this.state;

    const locations = !isHidden ? this.filerLocationBySearch(markers, search) : [];

    return (
      <SideNav id="sidenav" trigger={<Button className="hide">SIDE NAV</Button>} id="wrapper-aside" options={{ closeOnClick: true }}>

            <a href="#" className="right" id="close-btn"><Icon>clear</Icon>
            </a>

            <h3 tabIndex="1">Plan your perfect lake escape
                in <span id="bregenz">Bregenz </span><span><img src={atFlag} alt="Austrian flag" /></span></h3>
                <h4>Quick Filter</h4>
<Row>
            <Col s={6}>
              <Button
          id="show-button"
         tooltip="Show all locations"
          aria-label="Show all locations"
          tabIndex="1"
        onClick={this.showMarkersHandler}

             >
                 <Icon>visibility</Icon>
             </Button>
    </Col>
            <Col s={6}>
            <Button
         id="hide-button"
          tooltip="Hide all locations"
          aria-label="Hide all locations"
          tabIndex="1"
         onClick={this.hideMarkersHandler}
            >
                <Icon>visibility_off</Icon>
            </Button>
    </Col>
            </Row>
         <div id="filter">
              <Row>
            <Col s={4}>
             <Button
             id="filter-culture"
             tooltip="Culture"
             className="option"

              aria-label="Find places of culture and sights"

               onClick={() => { this.props.filterMarkers('filter-culture')}}
            >
             <Icon large>location_city</Icon>
              </Button>
                  </Col>
                   <Col s={4}>
               <Button id="filter-food"
                  tooltip="Restaurants & Cafes" className="option"
              aria-label="Find restaurants and cafes"
                        onClick={() => { this.props.filterMarkers('filter-food')}}
               >
                   <Icon>local_dining</Icon>
                       </Button></Col>
                        <Col s={4}>
               <Button id="filter-fun"
                   tooltip="Fun"
                    className="option"
              aria-label="Find bars and entertainment"
                        onClick={() => { this.props.filterMarkers('filter-fun')}}
               >
                    <Icon>local_activity</Icon>
               </Button>
                  </Col>
                    <Col s={4}>
                   <Button id="filter-shopping"
                      tooltip="Shopping"
                       className="option"
              aria-label="Find shops"
                            onClick={() => { this.props.filterMarkers('filter-shopping')}}
                   >
                       <Icon>local_grocery_store</Icon>
                        </Button></Col>
                         <Col s={4}>
                 <Button id="filter-beach"
                     tooltip="Beach"
                      className="option"
              aria-label="Find beaches"
                         onClick={() => { this.props.filterMarkers('filter-beach')}}
                 >
                      <Icon>beach_access</Icon>
                             </Button></Col>
                              <Col s={4}>
               <Button id="filter-nature"
               tooltip="Nature"
                className="option"
              aria-label="Find parks and nature"
                        onClick={() => { this.props.filterMarkers('filter-nature')}}
               >
               <Icon>local_florist</Icon></Button>
                  </Col>
             </Row>
            </div>
<h4>Search locations</h4>
         <Input
          type="text"
          placeholder="Search"
          value={search}
          onChange={this.searchLocations}
          aria-label="Search places"
          tabIndex="1"
        />
<h4>Locations</h4>
        <ul role="list" aria-label="Venues" tabIndex="1" id="search-results">
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
<p><span id="f-logo"> Powered by <img src={foursquareIMG} classNAme="img-responsive" alt="foursquare"/></span></p>
        </SideNav>
    );
  }
}
