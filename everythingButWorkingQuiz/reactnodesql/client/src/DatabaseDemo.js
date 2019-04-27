import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "reactstrap";
import  {BrowserRouter,Route} from "react-router-dom";
import Students from "./components/students/students.js";
import Quizzes from "./components/Quizzes/Quizzes.js";
import Other from "./SomeOtherPage.js";
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

class App extends Component {
  constructor(props){
    super(props);
    this.routeChange=this.routeChange.bind(this);
  }


  routeChange(value){
    console.log(value.target.id);
    if(value.target.id=="Back"){
        this.props.history.push("/");
    }

  }
  render() {
    return (
      <>
      <Button id="Back" onClick={this.routeChange}>{"\u2190"}</Button>
      <div className="App">
        <Students/>
        <Quizzes/>
        <p> taken from database connected to server at localhost 5000</p>
        <a href="http://localhost:5000/api/students" target="_blank">Here are the students</a><br></br>
        <a href="http://localhost:5000/api/quiz" target="_blank">Here are the quizzes</a>
      </div>
      </>
    );
  }
}

export default App;
