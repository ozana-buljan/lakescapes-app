/* *** *** *** IMPORTS *** *** *** */

/* React */
import React, { Component } from "react";

/*Local components and assets*/
import { Footer, Icon } from 'react-materialize';
import foursquareIMG from "../../Images/foursquare2.png";

/* *** *** Footer Component *** *** */
const LeFooter = ()=> (
    <Footer copyrights="© 2018 LakeEscapes - Neighbourhood Map app. All Rights Reserved">
        <p>Made for Udacity FEND by <span><a href="https://github.com/ozana-buljan">Ozana Buljan</a> </span>
            <span><Icon tiny>flash_on</Icon></span>
        <span id="f-logo"> Powered by <img src={foursquareIMG} classNAme="img-responsive" alt="foursquare logo"/></span>
        </p>
    </Footer>
)

/* *** *** EXPORT*** *** */
export default LeFooter;

