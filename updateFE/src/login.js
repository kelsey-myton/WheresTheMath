import React,{Component} from "react";
import {Button} from "reactstrap";
import {withRouter} from "react-router-dom";
import "./CSS/common.css";
import "./CSS/signup.css";

class Login extends Component {
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

      <div className= "FormTitle" id="TitleTextSignUp">
      Sign Up
      </div>
      <center>
      <form className= "FormFields">

      <div className="FormField">
        <label className= "FormField_Label">Full Name </label>
        <input className= "FormField_Input" placeholder= "Enter your Full Name" type="text" name="Full name" />
      </div>

      <div className="FormField">
        <label className= "FormField_Label" >Email </label>
        <input className= "FormField_Input" placeholder= "Enter your Email" type="text" name="Email" />
      </div>

      <div className="FormField">
        <label className= "FormField_Label" >Password </label>
        <input className= "FormField_Input" placeholder= "Create a Password" type="Password" name="Password" />
      </div>

      <div>
        <label className= "FormField_CheckboxLabel">
        <input className= "FormField_Checkbox" type="checkbox" name="Agreed" />
        I agree to all statements in <a href= "" className= "FormField_TermsLink" >terms of service</a></label>
      </div>

        <input type="submit" className= "FormField_Button" value="Sign up" />
          <Button className="Buttons" id="Back" onClick={this.routeChange}>Cancel</Button>
      </form>
</center>

      </>


    );
  }

}
export default withRouter(Login);
