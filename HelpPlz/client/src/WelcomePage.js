import React,{Component} from "react";
import {Nav,Navbar,NavbarBrand,NavLink,Button} from "reactstrap";
import {withRouter} from "react-router-dom";
import "./CSS/common.css";
import "./CSS/WelcomePage.css";
//const bcrypt = require('bcrypt');
//const saltRounds = 10;

class Welcome extends Component {
  constructor(props){
    super(props);
    this.routeChange=this.routeChange.bind(this);
  }

  routeChange(value){
    //console.log(value.target.id);
    if(value.target.id=="GetStarted"){
        this.props.history.push("/home",this.props.history.location.state);
    }
    else if (value.target.id=="Login"){
      this.props.history.push("/login",this.props.history.location.state);
    }
    else if (value.target.id=="SignUp"){
      this.props.history.push("/signup",this.props.history.location.state);
    }
    else{
      this.props.history.push("/progress",this.props.history.location.state);
    }
  }

  render(){
    var message="";
    var apo="'";
    if(this.props.history.location.state!="" && this.props.history.location.state!=null){
      message = ""+ this.props.history.location.state.user_name
    }
    //console.log("from location state",this.props.history.location.state);
    return(
      <>
      <header id="topbutt">
      <Button id="Login" className="Buttons" onClick={this.routeChange}>Login</Button>
      <Button id="SignUp" className="Buttons" onClick={this.routeChange}>SignUp</Button>
      </header>
      <div>
      </div>
      <div id="WelcomeTitleText">
      Where{apo}s The Math?<br/>
      </div>

      <div id="TheButtonsDiv">
        <Button id="GetStarted" className="Buttons" onClick={this.routeChange}>Lets Get Started {message}</Button>
      </div>
      </>
    );
  }

}
export default withRouter(Welcome);
