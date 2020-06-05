import React from 'react';
import Unity, { UnityContent } from "react-unity-webgl";
import NavMenu from './components/NavBar';
import {
    HashRouter as Router,
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
      <Router hashType="slash">
          <NavMenu/>
          <Route exact path="/" render={() => <Home/>}/>
          <Route path="/projects" render={() => <Projects/>}/>
      </Router>

  );
}

export default App;
