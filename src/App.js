/* *** *** *** IMPORTS *** *** *** */

/* React */
import React, { Component } from "react";
/*React-Materialize CSS npm*/
import {Row, Col, Card, Button, Icon, Navbar, NavItem, Footer } from 'react-materialize';
/*Local Components*/
import Header from "./Components/Header/Header.js";
import Main from "./Components/Main/Main.js";
/*styles*/
import './Styles/App.css';

/* *** *** *** COMPONENT*** *** *** */

const App = ()=> {

    return(
        <div id="app">
        <Header />
        <Main />
         <Footer
                copyrights="© 2018 LakeEscapes - Neighbourhood Map app. All Rights Reserved">

    </Footer>
        </div>
  );
        }

/* *** *** EXPORT*** *** */

export default App;
