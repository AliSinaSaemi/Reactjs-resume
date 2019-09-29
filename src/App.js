import React, { Component } from 'react';
import styled from "styled-components";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './assets/main/css/main.css';
import Page from './components/Active_link';
import Home from './components/pages/Home';
import { Skills } from './components/pages/Skills';
import { Bio } from './components/pages/Bio';
import Navigation from './components/main/Navigation';

class App extends Component {
  
  render() {
    return (
    <BrowserRouter>
      <Navigation />
   
        <Route
            exact
            path="/"
            render={props => (
              <Page {...props} component={Home} title="Home" />
          )}
        />
        <Route
          path="/skills"
            render={props => (
              <Page {...props} component={Skills} title="Skills" />
          )}
        />
        <Route
          path="/bio"
            render={props => (
              <Page {...props} component={Bio} title="Bio" />
          )}
        />

    </BrowserRouter>
    )
  }
}


export default App;
