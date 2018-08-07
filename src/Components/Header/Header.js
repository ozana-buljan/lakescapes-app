/* *** *** *** IMPORTS *** *** *** */
/* React */
import React, { Component } from "react";
/*React-Materialize CSS npm*/
import { Icon, Navbar } from 'react-materialize';
/*Local Components*/
import ToggleAsideBtn from './ToggleAsideBtn';

/* *** *** *** COMPONENT*** *** *** */
class Header extends Component{
render() {
      return (
          <Navbar left fixed>
              <ToggleAsideBtn  className="hide-on-med-and-down"/>
              <a ><img src="" alt="Lakescapes app logo" className="logo"/></a>
              </Navbar>
    );
  }
}

/* *** *** EXPORT*** *** */
export default Header;
