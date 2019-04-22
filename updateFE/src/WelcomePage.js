import React,{Component} from "react";
import {Button} from "reactstrap";
import {withRouter} from "react-router-dom";
import "./CSS/common.css";
import "./CSS/WelcomePage.css";

class Welcome extends Component {
  constructor(props){
    super(props);
    this.routeChange=this.routeChange.bind(this);
  }


  routeChange(value){
    console.log(value.target.id);
    if(value.target.id=="Login"){
        this.props.history.push("/login");
    }
    else if (value.target.id=="SignUp"){
      this.props.history.push("/signup");
    }
    else if (value.target.id=="GetStarted"){
      this.props.history.push("/home");
    }
    else{ //we should take this out
      this.props.history.push("/progress");
    }

  }

  render(){
    return(
      <>


      <header id= "topbutt">
      <Button id="Login" className= "topButton" onClick={this.routeChange}>Login</Button>
      <Button id="SignUp" className= "topButton" onClick={this.routeChange}>Sign up</Button>
      </header>
      <div id="WelcomeTitleText">
      {"Where's The Math?"}
      </div>

      <div id="TheButtonsDiv">

        <Button id="GetStarted" className= "Buttons" onClick={this.routeChange}>Get Started</Button>

      </div>

      </>
    );
  }

}
export default withRouter(Welcome);
