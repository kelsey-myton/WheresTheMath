import React,{Component} from "react";
import {Button} from "reactstrap";
import {withRouter} from "react-router-dom";
import "./CSS/common.css";
import "./CSS/home.css";
var Latex = require('react-latex');

class Home extends Component {
  constructor(props){
    super(props);
    this.routeChange=this.routeChange.bind(this);
  }

  routeChange(value){
    if (value.target.id=="All"){
        this.props.history.push("/All",this.props.history.location.state);
    }
    else if (value.target.id=="Progress"){
      this.props.history.push("/progress",this.props.history.location.state);
    }
    else if (value.target.id=="Baking"){
      this.props.history.push("/lesson2",this.props.history.location.state);
    }
    else if (value.target.id=="Gaming"){
      this.props.history.push("/lesson1",this.props.history.location.state);
    }
    else{
      this.props.history.push("/",this.props.history.location.state);
    }
  }

  render(){
    //console.log(this.props.history.location.state);
    return(
      <>
      <header id="topbutt">
      <Button id="Back2WelcomeScreen" className="Buttons" onClick={this.routeChange}>{"\u2190"}</Button>
      <Button id="Progress" className="Buttons" onClick={this.routeChange}>Progress</Button>

      </header>
      <div id="TitleText">
      What are you interested in?
      </div>

      <div id="TopicDiv">
      <div className="interest_row">
        <Button id="Baking" className="interest_button" onClick={this.routeChange}>Baking</Button>
        <Button id="Gaming" className="interest_button" onClick={this.routeChange}>Gaming</Button>
        </div>
        <div className="interest_row">
        <Button className= "interest_button">Coming Soon</Button>
        <Button className= "interest_button">Coming Soon</Button>
      </div>
      </div>

      <div id="ButtonsDiv">
        <Button id="All" className="Buttons" onClick={this.routeChange}>All Concepts</Button>

      </div>
      </>
    );
  }

}
export default withRouter(Home);
