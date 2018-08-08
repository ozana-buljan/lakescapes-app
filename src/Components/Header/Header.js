/* *** *** *** IMPORTS *** *** *** */
/* React */
import React, { Component } from "react";
/*React-Materialize CSS npm*/
import { Navbar } from 'react-materialize';
/*Local Components & Assets*/
import ToggleAsideBtn from './ToggleAsideBtn';
import LeLogo from "../../Images/le-logo.png";

/* *** *** *** COMPONENT*** *** *** */
class Header extends Component{
render() {
      return (
          <Navbar left fixed>
              <ToggleAsideBtn  className="hide-on-med-and-down"/>
              <a ><img id="le-logo" src={LeLogo} alt="Lakescapes app logo" className="logo img-responsive"/></a>
              </Navbar>
    );
  }
}

/* *** *** EXPORT*** *** */
export default Header;
