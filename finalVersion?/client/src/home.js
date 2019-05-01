import React,{Component} from "react";
import {Nav,Navbar,NavbarBrand,NavLink,Button} from "reactstrap";
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
    else if (value.target.id=="Baking" || value.target.id=="bakingicon"){
      this.props.history.push("/lesson2",this.props.history.location.state);
    }
    else if (value.target.id=="Gaming" || value.target.id=="gamingicon"){
      this.props.history.push("/lesson1",this.props.history.location.state);
    }
    else{
      this.props.history.push("/",this.props.history.location.state);
    }
  }

  render(){
    var apo="'";
    //console.log(this.props.history.location.state);
    return(
      <>

      <div className= "navlength">
        <Navbar className="Navbar">
            <Nav className="Nav">
            <NavbarBrand className="navbrand"> Where{apo}s The Math?</NavbarBrand>
                <NavLink><Button id="Back2WelcomeScreen" className="navitem" onClick={this.routeChange}>Log In Page</Button></NavLink>
                <NavLink><Button id="Progress" className="navitem" onClick={this.routeChange}>Progress </Button></NavLink>
            </Nav>
        </Navbar>
      </div>

      <div id="TitleText">
      What are you interested in?
      </div>

      <div id="TopicDiv">
      <div className="interest_row">
        <Button id="Baking" className="interest_button" onClick={this.routeChange}>Baking<img id="bakingicon"/></Button>
        <Button id="Gaming" className="interest_button" onClick={this.routeChange}>Gaming<img id="gamingicon"/></Button>
        </div>
        <div className="interest_row">
        <Button className= "interest_button">Coming Soon<img id="comingicon"/></Button>
        <Button className= "interest_button">Coming Soon<img id="comingicon"/></Button>
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
