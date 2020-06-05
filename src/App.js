import React from 'react';
import Unity, { UnityContent } from "react-unity-webgl";
import NavMenu from './components/NavBar';
import {
    BrowserRouter as Router,
    Redirect,
    Route
} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//my components
import Home from "./components/Home";
import Projects from "./components/Projects";

const unityContent = new UnityContent(
    "MyGame/Build.json",
    "MyGame/UnityLoader.js"
);

function App() {

  return (
      <Router basename="/KyleEstes-website">
          <NavMenu/>
          <Redirect from="" to="/Home"/>
          <Route path="/Home" render={() => <Home/>}/>
          <Route path="/Projects" render={() => <Projects/>}/>
      </Router>

  );
}

export default App;
