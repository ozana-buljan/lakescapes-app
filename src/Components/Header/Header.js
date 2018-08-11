/* *** *** *** IMPORTS *** *** *** */
/* React */
import React from "react";
/*React-Materialize CSS npm*/
import { Navbar } from 'react-materialize';
/*Local Components & Assets*/
import ToggleAsideBtn from './ToggleAsideBtn';
import LeLogo from "../../Images/le-logo.png";

/* *** *** *** COMPONENT*** *** *** */
const Header = () => {
      return (
        <Navbar left fixed role="navigation" aria-label="main menu" >
              <ToggleAsideBtn  autofocus  aria-label="open side navigation" className="hide-on-med-and-down"/>
              <img
               id="le-logo" src={LeLogo} alt="Lakescapes app logo" className="logo responsive-img"/>
        </Navbar>
    );
  }


/* *** *** EXPORT*** *** */
export default Header;
