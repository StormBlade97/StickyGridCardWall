import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Toolbar, ToolbarTitle, ToolbarGroup} from 'material-ui/Toolbar';
import ResponsiveReactGridLayout from './ResponsiveReactGridLayout';
//In this file we will fidget with our components
const testCallback = (message) => console.log(message);
class App extends Component {
  render() {

    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="REACT GRID LAYOUT TEST"></AppBar>
          <ResponsiveReactGridLayout></ResponsiveReactGridLayout>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
