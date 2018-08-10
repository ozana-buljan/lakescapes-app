/* *** *** *** IMPORTS *** *** *** */

/* React */
import React from "react";
/*prop-types npm*/
import PropTypes from 'prop-types';
/*Local components and assets*/
import { Footer } from 'react-materialize';


/* *** *** Footer Component *** *** */
const LeFooter = ()=> (

    <Footer copyrights="© 2018 LakeEscapes - Neighbourhood Map App. All Rights Reserved"
    moreLinks={
            <p className="credits">Made for Udacity FEND by <span><a className="blue-text text-darken-5" href="https://github.com/ozana-buljan">Ozana Buljan</a></span></p>
  }
   />
)

/* *** *** EXPORT*** *** */
export default LeFooter;

LeFooter.propTypes = {
     copyrights: PropTypes.string,
     moreLinks: PropTypes.object
    //both are predefined in react-materialize
}
