import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Other from './SomeOtherPage';
import Home from "./home";
import Results from "./results";
import Progress from "./progress";
import Welcome from "./WelcomePage";
import Lesson1 from "./mocklesson";
import Lesson2 from "./mocklesson2";
import AllC from "./AllConcepts";
import WTM1 from "./WTM1";
import WTM2 from "./WTM2";
import Test from "./testyourself"
import Extra from "./extraHelp";
import SignUp from "./signup.js";
import Demo from "./DatabaseDemo";
import sTEST from "./signupTest";
import Login from "./login.js";
import TOS from "./TOS.js";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route} from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/other" component={Other}/>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/" component={Welcome}/>
    <Route exact path="/results" component={Results}/>
    <Route exact path="/progress" component={Progress}/>
    <Route exact path="/lesson1" component={Lesson1}/>
    <Route exact path="/lesson2" component={Lesson2}/>
    <Route exact path="/All" component={AllC}/>
    <Route exact path="/WTM1" component={WTM1}/>
    <Route exact path="/WTM2" component={WTM2}/>
    <Route exact path="/test" component={Test}/>
    <Route exact path="/extrahelp" component={Extra}/>
    <Route exact path="/signup" component={SignUp}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/Demo" component={Demo}/>
    <Route exact path="/sTEST" component={sTEST}/>
    <Route exact path="/termsofservice" component={TOS}/>


  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
