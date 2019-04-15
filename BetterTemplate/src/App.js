import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  {BrowserRouter,Route} from "react-router-dom";
import Students from "./components/students/students.js";
import Other from "./SomeOtherPage.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Students/>
      </div>
      <div>

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
