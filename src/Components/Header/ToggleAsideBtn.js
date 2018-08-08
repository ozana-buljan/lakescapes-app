/* *** *** *** IMPORTS *** *** *** */
/* React */
import React, { Component } from "react";
/*React-Materialize CSS npm*/
import { Icon, NavItem } from 'react-materialize';


/* *** *** *** COMPONENT*** *** *** */
export default class ToggleAsideBtn extends Component{
    render(){
        return(
            <NavItem data-activates="wrapper-aside" className="toggle-button" aria-label="Toggle Side Panel">
                 <Icon>menu</Icon>
            </NavItem>
        );
    }
}
