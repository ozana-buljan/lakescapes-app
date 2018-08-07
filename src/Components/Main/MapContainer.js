/* *** *** *** IMPORTS *** *** *** */
/* React,  ReactDOM */
import React, { Component } from "react";
import ReactDOM from "react-dom";
/* axios npm -> HTTP Client */
//src: https://www.npmjs.com/package/axios
import axios from "axios";
/*google-maps-react npm*/
//Documentation & src: https://www.npmjs.com/package/google-maps-react
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

/*Local Components*/
import Aside from "../Aside";
/*Utils*/
import {
    allPlaces,
    culturePlaces,
    beachPlaces,
    naturePlaces,
    foodPlaces,
    funPlaces,
    shoppingPlaces
} from "../../Utils/places.js";
import { mapStyles } from "../../Utils/mapStyles";



/* *** *** *** Component *** *** *** */
class MapContainer extends Component {
  constructor(props) {
        super(props);
        this.state = {
            selectedArray: 'allPlaces',
            locations: allPlaces,
            defaultMapZoom: 15,
            center: {
                lat: 47.50075,
                lng: 9.74231
            },
            mapType: "roadmap",
            iconSize: 30,
            mapTypeControl: false,
            markers: [],
            infoWindow: "",
            markerDetails: {
                name: null,
                address: null,
                url: null,
                img: null,
                phone: {
                    formattedPhone: null,
                    phone: null
                },
                rating: null
            }
        };
    }
 /*
  *@description componentDidMount()-> after component mounts, load the map
  */
  componentDidMount() {
    this.initMap();
  }
 /* *** *** *** MAP *** *** *** */
   /*
  *@description initMap()-> initializes GoogleMap
  */
  initMap = () => {
    if (this.props && this.props.google) {
      const { google } = this.props;
      const maps = google.maps;

      const { defaultMapZoom, center, mapType } = this.state;

/*defining arguments for new map*/
    // Getting the location to put new map in -> Looking for element with reference = 'map' prop and when found, nameing it mapNode
      const mapReference = this.refs.map;
      const mapNode = ReactDOM.findDOMNode(mapReference);
        //seting initial properties for the new Map
      const mapSettings = Object.assign(
        {},
        {
          center: center,
          zoom: defaultMapZoom,
          mapTypeId: mapType,
          styles: mapStyles
        }
      );
      //Creating a new Google map
      this.map = new maps.Map(mapNode, mapSettings);

    //Adding markers to map
      this.addMarkers();

    //Creatig infoWindow and setting state for it
      const infoWindow = new google.maps.InfoWindow({ maxWidth: 300 });
      this.setState({ infoWindow: infoWindow });
    }
  };
/* *** *** *** MARKERS *** *** *** */
  /*
  *@description addMarkers()-> Adds markers to a map from State
  */

  addMarkers = () => {
    const { google } = this.props;
    const { iconSize, locations } = this.state;
    const markers = [];

    // Creating marker icon
      //TODO-> set different icon for each category
    const leIcon = {
      url: "./img/le-icon.png",
      size: new google.maps.Size(iconSize, iconSize),
      scaledSize: new google.maps.Size(iconSize, iconSize)
    };

    //Creating marker for each location
    locations.forEach((location, index, icon) => {
      const marker = new google.maps.Marker({
        map: this.map,
        position: { lat: location.location.lat, lng: location.location.lng },
        title: location.name,
        animation: google.maps.Animation.DROP,
        id: index,
        icon: leIcon,
        anchorPoint: new google.maps.Point(0, -30)
      });

      // Pushing markers to markers array
      markers.push(marker);
     //Event listener-> on click; open InfoWindow
      marker.addListener("click", () => {
        this.openInfoWindow(marker);
      });
    });

    // Set up the markers state
    this.setState({ markers });
  };


/* *** *** *** MARKERS *** *** *** */
  /**
   * @description openInfoWindow()-> Opens info window for the marker; parameter is object Marker
   */
  openInfoWindow = marker => {
    const { map } = this;
    const { infoWindow } = this.state;
    // Check if the infoWindow is not already opened for this marker
    if (infoWindow.marker !== marker) {
      infoWindow.marker = marker;
      infoWindow.setContent(`Loading content...`);
      infoWindow.open(this.map, marker);

      // Clear the marker property when closed
      infoWindow.addListener("closeclick", () => {
        infoWindow.setMarker = null;
      });
    }

    this.getMarkerDetails(marker);

    // Center map to a marker position
    map.panTo(marker.getPosition());
  };
/* *** *** *** API Requests *** *** *** */
  /*
   * @description - sending request to Foursquare API, to get data to populate the info in infoWindow; parameter is object Marker
   */
    getMarkerDetails = marker => {
        const clientId = "MLLOMQL3LFVFJXWBKK5YZ41WH2FJLGZVLV3QZLTLXBR0PS2A";
        const clientSecret = "YRDQYSBBOI0RWSAIB4BJ1GSRM0K2SCUPA0JOI412SDQOB3ER";
        const { infoWindow } = this.state;


        // Async request to fetch Foursquare venues data -> with axios npm
        //documentation&src: https://www.npmjs.com/package/axios
    axios
      .get("https://api.foursquare.com/v2/venues/search", {
        params: {
          client_id: clientId,
          client_secret: clientSecret,
          ll: `${marker.getPosition().lat()},${marker.getPosition().lng()}`,
          v: "20180803",
          query: marker.title,
          limit: 1
        }
      })
      .then(res => {
        const venueId = res.data.response.venues[0].id;

        return axios.get(`https://api.foursquare.com/v2/venues/${venueId}`, {
          params: {
            client_id: clientId,
            client_secret: clientSecret,
            v:"20180803"
          }
        });
      })
      .then(res => {
        // Set variables and update the state
        const { venue } = res.data.response;

        const name = venue.name;
        const address = venue.location.formattedAddress.join(", ");
        const url = venue.url;
        const img = `${venue.bestPhoto.prefix}150x150${venue.bestPhoto.suffix}`;
        const phone = {
          formattedPhone: venue.contact.formattedPhone,
          phone: venue.contact.phone
        };
        const rating = venue.rating;

        this.setState({
          markerDetails: {
            name,
            address,
            url,
            img,
            phone,
            rating
          }
        });
      })
      .then(res => {
        // Retrieve details from state and create content for infoWindow
        const {
          name,
          address,
          url,
          img,
          phone,
          rating
        } = this.state.markerDetails;

        const phoneField =
          phone.phone !== undefined
            ? `<a href="tel:${phone.phone}">${phone.formattedPhone}</a>`
            : "";
        const urlField =
          url !== undefined ? `<a href=${url} target="_blank">${url}</a>` : "";
        const ratingField =
          rating !== undefined
            ? `<span><b>${rating}</b></span>`
            : "not available";
        const imgField =
          img !== undefined ? `<img src=${img} alt=${name} />` : "";

        const content = `
          <div style="width: 100%;">
            <h4>${name}</h4>
           <ul>
            <li>${address}</li>
            <li>${phoneField}</li>
            <li>${urlField}</li>
            <li>Rating: ${ratingField}</li>
            </ul>
            <div style='width: 100%; text-align: center'>${imgField}</div>
            <img style="width: 100%" src="./img/byFoursquare.png" />
          </div>
        `;

        // Set the infoWindow content
        infoWindow.setContent(content);
      })
      .catch(err => {
        console.log("Error", err);
      });
  };

  /**
   * @description -> Closes the Info Window
   */
  closeInfoWindow = () => {
    this.state.infoWindow.close();
  };

  /**
   * Hides all markers from map
   */
  hideMarkers = () => {
    const { markers } = this.state;

    markers.forEach(marker => {
      marker.setMap(null);
    });
  };

  /**
   * Show all markers to map
   */
  showMarkers = () => {
    const { markers } = this.state;

    markers.forEach(marker => {
      marker.setMap(this.map);
    });
  };
//TODO-> on change of filter update markers and list
  updateMarkers = markers => {
    this.setState({ markers });
  };

filterMarkers =(id)=> {
    if(id === 'show-button'){
        this.setState({locations: allPlaces});
       }else if(id === 'filter-culture'){
        this.setState({locations: culturePlaces});
    }else if (id == 'filter-food'){
        this.setState({locations: foodPlaces});
    }else if (id == 'filter-fun'){
        this.setState({locations: funPlaces});
    }else if (id == 'filter-shopping'){
        this.setState({locations: shoppingPlaces});
    }else if (id == 'filter-beach'){
        this.setState({locations: beachPlaces});
    }else if(id == 'filter-nature'){
        this.setState({locations: naturePlaces});
    }

    if (id !== this.state.selectedArray &&
        id !== allPlaces) {
        this.setState({ selectedArray: id });
    }
};

    componentDidUpdate(_, prevState) {
        if (this.state.selectedArray !== prevState.selectedArray) {
            console.log('locations', this.state.selectedArray);
            this.hideMarkers();
            this.addMarkers();
        }else{
            this.showMarkers();
        }
    }

  render() {
    const { markers, locations } = this.state;

    return (
      <div id="wrapper">
        <Aside
        locations={locations}
          markers={markers}
          showMarkers={this.showMarkers}
          hideMarkers={this.hideMarkers}
          openInfoWindow={this.openInfoWindow}
          closeInfoWindow={this.closeInfoWindow}
          searchLocations={this.searchLocations}
          filterMarkers={this.filterMarkers}

        />
    <Map id="map-div" role="application" ref="map"
       google={this.props.google}
        locations={this.props.locations}>

      </Map>

        </div>
    );
  }
}

/* *** *** *** EXPORT *** *** *** */
export default MapContainer;
