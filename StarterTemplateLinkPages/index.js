import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Other from './SomeOtherPage';
import Home from "./home";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>

    <Route exact path="/other" component={Other}/>
    <Route exact path="/" component={Home}/>
    // These are from a comment out
    //<Route path="/default" component={App}/>
  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
