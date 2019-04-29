import React,{Component} from "react";
import {Button} from "reactstrap";
import {withRouter} from "react-router-dom";
import "./CSS/common.css";
import "./CSS/signup.css";

class Login extends Component {
  constructor(props){
    super(props);
    this.routeChange=this.routeChange.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.test=this.test.bind(this);
    this.state={
      name:"",
      switcher:true
    }
  }

  handleChange(event) {
   this.setState({user_name: event.target.value});
 }

  routeChange(value){
    if (value.target.id=="Back"){
        this.props.history.push("/",this.props.history.location.state);
  }
  else if(value.target.id=="Home"){
    this.props.history.push("/home",this.props.history.location.state);
  }
}

test(){
  var user=this.state;
  //console.log(user);
  var url="/api/login";
  const req = new Request(url,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(user),
  });
  fetch(req)
  .then((res)=>{
    if(res.status===500){
    res.json()
    .then((json)=>{
        const {message,stackTrace}=json;
      })
      .catch((error)=>{
        return Promise.reject(error);
      });
    }
    else{
      return res.json();
    }
  })
  .then(user => this.setState({name:user},()=> console.log("success",user)));
}

render(){
    console.log("state Login",this.state);
    //looks weird, trust me it works for proper alert
    this.state.switcher=true;
    if(this.state.name===" " && this.state.switcher){
      this.state.switcher=false;
      this.state.name="";
      alert("Invald Username or Password")
    }
    if(this.state.name.user_name!=null){
        this.props.history.push("/",this.state.name);
    }

    return(
      <>

      <div className= "FormTitle" id="TitleTextSignUp">
      Login
      </div>
      <center>

      <div className= "FormFields">

      <div className="FormField">
        <label className= "FormField_Label" >Username </label>
        <input onChange={this.handleChange} className= "FormField_Input" placeholder= "Enter your Email" type="text" name="Email" />
      </div>

      <div className="FormField">
        <label className= "FormField_Label" >Password </label>
        <input className= "FormField_Input" placeholder= "Create a Password" type="Password" name="Password" />
      </div>

      <div id="buff">
        <label className= "FormField_CheckboxLabel">
        <input className= "FormField_Checkbox" type="checkbox" name="Agreed" />
        I agree to all statements in <a href= "/termsofservice" className= "FormField_TermsLink" >terms of service</a></label>
      </div>
          <Button onClick={this.test} className= "Buttons" >Login </Button>
          <Button className="Buttons" id="Back" onClick={this.routeChange}>Back</Button>
      </div>
</center>

      </>


    );
  }

}
export default withRouter(Login);
