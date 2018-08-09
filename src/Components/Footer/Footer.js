/* *** *** *** IMPORTS *** *** *** */

/* React */
import React from "react";

/*Local components and assets*/
import { Footer, Icon } from 'react-materialize';
import foursquareIMG from "../../Images/foursquare2.png";

/* *** *** Footer Component *** *** */
const LeFooter = ()=> (
    <Footer copyrights="© 2018 LakeEscapes - Neighbourhood Map App. All Rights Reserved"
    moreLinks={
            <p className="credits">Made for Udacity FEND by <span><a className="blue-text text-darken-5"a href="https://github.com/ozana-buljan">Ozana Buljan</a></span></p>
  }
   />
)

/* *** *** EXPORT*** *** */
export default LeFooter;

