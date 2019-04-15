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
      <div>
        <Button id="Back2WelcomeScreen" onClick={this.routeChange}>{"\u2190"}</Button>
      </div>

      <div id="HomeTitleText">
      What Are You interested in?<br></br>
      (Implement zoom)
      </div>

      <div id="TopicDiv">
        <Button id="Baking" onClick={this.routeChange}>Baking</Button>
        <Button id="Gaming" onClick={this.routeChange}>Gaming</Button>
      </div>

      <div id="ButtonsDiv">
        <Button id="All" onClick={this.routeChange}>All Concepts</Button>
        <Button id="Progress" onClick={this.routeChange}>Progress</Button>
      </div>
      </>
    );
  }

}
export default withRouter(Home);
