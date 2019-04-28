import React,{Component} from "react";
import {Button} from "reactstrap";
import {withRouter} from "react-router-dom";
import "./CSS/common.css";
import "./CSS/signup.css";


class SignUp extends Component {
  constructor(props){
    super(props);
    this.routeChange=this.routeChange.bind(this);
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.state={
      name:""
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
        name: this.state.name
      };
      console.log(newUser);
  };

  routeChange(value){
    if (value.target.id=="Back"){
        this.props.history.push("/");
  }
  else if(value.target.id=="Progress"){
    this.props.history.push("/progress");

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

      <form>
        <input placeholder="User name" value={this.state.name}
        onChange={this.onChange}/>
      </form>


      <div id="TheButtonsDivSignup">
        <Button id="Home" onClick={this.routeChange}>Home</Button>
        <Button id="Progress" onClick={this.routeChange}>Progess</Button>
      </div>

      </>
    );
  }

}
export default withRouter(SignUp);


//alt input
<input onChange={ blah => this.setState({blah: blah.target.value})} />
<Button onClick={()=>console.log(this.state)}>click me</Button>

// not fancy functional SignUp
<div id="BackButtonDiv">
  <Button id="Back" onClick={this.routeChange}>{"\u2190"}</Button>
</div>

<div id="TitleTextSignUp">
Sign In<br></br>{seeName}
</div>

<div>
<input type="TEXT" id="user" size="40"onChange={this.handleChange}/>
<input type="button" id="submit" value="Submit" onClick={this.test}/>
</div>
