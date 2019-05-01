import React,{Component} from "react";
import {Nav,Navbar,NavbarBrand,NavLink,Button} from "reactstrap";
import {withRouter} from "react-router-dom";
import "./CSS/common.css";
import "./CSS/WelcomePage.css";

class Welcome extends Component {
  constructor(props){
    super(props);
    this.routeChange=this.routeChange.bind(this);
  }

  routeChange(value){
    //console.log(value.target.id);
    if(value.target.id=="Welcome"){
        this.props.history.push("/",this.props.history.location.state);
    }
  }

  render(){
    var apo="'";
    return(
      <>
      <div id="Message">
        TERMS OF SERVICE
        <p>Stay in School and agree that Math is cool</p>
        <Button id="Welcome" className="Buttons" onClick={this.routeChange}>{"\u2190"}</Button>
      </div>
      </>
    );
  }

}
export default withRouter(Welcome);
