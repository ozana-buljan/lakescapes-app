/* *** *** *** IMPORTS *** *** *** */

/* React */
import React, { Component } from "react";

/*Local Components*/
import Header from "./Components/Header/Header.js";
import Main from "./Components/Main/Main.js";
import LeFooter from "./Components/Footer/Footer.js";
/*styles*/
import './Styles/App.css';

/* *** *** *** COMPONENT*** *** *** */

const App = ()=> {

    return(
        <div id="app">
        <Header />
        <Main />
         <LeFooter />

        </div>
  );
        }

/* *** *** EXPORT*** *** */

export default App;
