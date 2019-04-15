import React,{Component} from "react";
import {Button} from "reactstrap";
import {withRouter} from "react-router-dom";
import "./CSS/common.css";
import "./CSS/signup.css";

class SignUp extends Component {
  constructor(props){
    super(props);
    this.routeChange=this.routeChange.bind(this);
  }

  routeChange(value){
    if (value.target.id=="Back"){
        this.props.history.push("/");
  }
  else if(value.target.id=="Home"){
    this.props.history.push("/home");

  }
}

  render(){
    return(
      <>
      <div id="BackButtonDiv">
        <Button id="Back" onClick={this.routeChange}>{"\u2190"}</Button>
      </div>

      <div id="TitleTextSignUp">
      This will be the SignUp Page
      </div>

      <div id="Form">
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>

      <div id="TheButtonsDivSignup">
        <Button id="Home" onClick={this.routeChange}>Home</Button>
        <Button id="Progress" onClick={this.routeChange}>Progess</Button>
      </div>

      </>
    );
  }

}
export default withRouter(SignUp);
