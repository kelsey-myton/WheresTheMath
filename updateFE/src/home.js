import React,{Component} from "react";
import {Button} from "reactstrap";
import {withRouter} from "react-router-dom";
import "./CSS/common.css";
import "./CSS/home.css";

class Home extends Component {
  constructor(props){
    super(props);
    this.routeChange=this.routeChange.bind(this);
  }

  routeChange(value){
    if (value.target.id=="All"){
        this.props.history.push("/All");
    }
    else if (value.target.id=="Progress"){
      this.props.history.push("/progress");
    }
    else if (value.target.id=="Baking"){
      this.props.history.push("/lesson1");
    }
    else if (value.target.id=="Gaming"){
      this.props.history.push("/lesson1");
    }
    else{
      this.props.history.push("/");
    }
  }

  render(){
    return(
      <>

      <header id="topbutt">
      <Button id="Back2WelcomeScreen" className="topButton" onClick={this.routeChange}>{"\u2190"}</Button>
      <Button id="Progress" className="topButton" onClick={this.routeChange}>Progress</Button>

      </header>
      <div id="TitleText">
      What are you interested in?
      </div>

      <div id="TopicDiv">
      <div className="interest_row">
        <Button id="Test" className="interest_button" onClick={this.routeChange}>Baking</Button>
        <Button className="interest_button" onClick={this.routeChange}>Gaming</Button>
        </div>
        <div className="interest_row">
        <Button className= "interest_button">Coming Soon</Button>
        <Button className= "interest_button">Coming Soon</Button>
      </div>
      </div>

      <div id="ButtonsDiv">
        <Button id="All" className="bottombutton" onClick={this.routeChange}>All Concepts</Button>

      </div>
      </>
    );
  }

}
export default withRouter(Home);
