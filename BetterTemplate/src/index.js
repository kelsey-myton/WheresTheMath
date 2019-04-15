import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Other from './SomeOtherPage';
import Home from "./home";
import Progress from "./progress";
import Welcome from "./WelcomePage";
import Lesson1 from "./mocklesson";
import AllC from "./AllConcepts";
import WTM1 from "./WTM1";
import Test from "./testyourself"
import Extra from "./extraHelp";
import SignUp from "./signup.js";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/other" component={Other}/>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/" component={Welcome}/>
    <Route exact path="/progress" component={Progress}/>
    <Route exact path="/lesson1" component={Lesson1}/>
    <Route exact path="/All" component={AllC}/>
    <Route exact path="/WTM1" component={WTM1}/>
    <Route exact path="/test" component={Test}/>
    <Route exact path="/extrahelp" component={Extra}/>
    <Route exact path="/signup" component={SignUp}/>

  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
