/* *** *** *** IMPORTS *** *** *** */

/* React */
import React from "react";

/*Local Components*/
import Header from "./Components/Header/Header.js";
import Main from "./Components/Main/Main.js";
import LeFooter from "./Components/Footer/Footer.js";
/*styles*/
import './Styles/App.css';

/* *** *** *** COMPONENT*** *** *** */

const App = ()=> {

    return(
        <div id="app" aria-label="Lake escape application for discoevring points of interest in Bregenz, Austria" tabIndex="0">
        <Header role="navigation" />
        <Main role="main"/>
         <LeFooter />

        </div>
  );
        }

/* *** *** EXPORT*** *** */

export default App;
