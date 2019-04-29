import React,{Component} from "react";
import {Nav,Navbar,NavbarBrand,NavLink,Button} from "reactstrap";
import {withRouter} from "react-router-dom";
import "./CSS/common.css";
import "./CSS/extraHelp.css";

class extra extends Component {
  constructor(props){
    super(props);
    this.routeChange=this.routeChange.bind(this);
  }


  routeChange(value){
    //console.log(value.target.id);
    if(value.target.id=="Home"){
        this.props.history.push("/home",this.props.history.location.state);
    }
    else if (value.target.id=="Back"){
      this.props.history.goBack();
    }
    else if(value.target.id=="Extra"){
      this.props.history.push("/other",this.props.history.location.state);
    }
    else{
      this.props.history.push("/progress",this.props.history.location.state);
    }

  }


  render(){
    var apo="'";
    //console.log(this.props.history.location.state)
    return(
      <>
      <div className= "navlength">
        <Navbar className="Navbar">
            <Nav className="Nav">
            <NavbarBrand className="navbrand"> Where{apo}s The Math?</NavbarBrand>
                <NavLink><Button id="Home" className="navitem" onClick={this.routeChange}> Home</Button></NavLink>
                <NavLink><Button id="Progress" className="navitem" onClick={this.routeChange}>Progress </Button></NavLink>
            </Nav>
        </Navbar>
      </div>
      <header id="topbutt">
        <Button id="Back" className="Buttons" onClick={this.routeChange}>Back</Button>
        <Button id="Home" className="Buttons" onClick={this.routeChange}>Home</Button>
      </header>

      <div>
      <h1>Other Resources</h1>
        <li><a target="_blank" className="links" href ="https://www.khanacademy.org/">Khan Academy</a></li>
        <li><a target="_blank" className="links" href="https://www.youtube.com/watch?v=wZ1E_CM7MqA&t=26s">Numberphile</a></li>
        <li><a target="_blank" className="links" href ="https://www.desmos.com/calculator">Desmos</a></li>
        <li><a target="_blank" className="links" href="https://study.com/academy/topic/introduction-to-quadratics-lesson-plans.html">Quadratics Visuals</a></li>
      </div>
      </>
    );
  }

}
export default withRouter(extra);
