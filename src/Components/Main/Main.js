/* *** *** *** IMPORTS *** *** *** */

/* React */
import React, { Component } from "react";

/*google-maps-react npm*/
//Documentation & src: https://www.npmjs.com/package/google-maps-react
import { GoogleApiWrapper } from "google-maps-react";

/*Local Components*/
import MapContainer from "./MapContainer";

/* *** *** *** COMPONENT*** *** *** */
class Main extends Component {
  render() {
    return (
      <MapContainer
        google={this.props.google}
        locations={this.props.locations}
      />
    );
  }
}

/* *** *** EXPORT*** *** */
 //for some reason, I couldn't export two modules from ./MapContainer (even though documentation states otherwise - source:https://www.npmjs.com/package/google-maps-react )- so i needed to make this separate component here to export API key

export default GoogleApiWrapper({
  apiKey: "AIzaSyDNepbDDVzH2xs8NLOn2xJUFzc4MDRjc3k"
})(Main);
