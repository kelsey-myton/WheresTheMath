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
    if(value.target.id=="Home"){
        this.props.history.push("/home");
    }
    else if (value.target.id=="Login"){
      this.props.history.push("/signup");
    }
    else{
      this.props.history.push("/progress");
    }

  }


  render(){
    return(
      <>
      <div id="TitleText">
      {"Wheres The Math?"}
      </div>

      <div id="TheButtonsDiv">
        <Button id="Home" onClick={this.routeChange}>Home</Button>
        <Button id="Progress" onClick={this.routeChange}>Progess</Button>
        <br></br>
        <Button id="Login" onClick={this.routeChange}>Login/SignUp</Button>
      </div>
      </>
    );
  }

}
export default withRouter(Welcome);
