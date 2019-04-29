import React,{Component} from "react";
import {Nav,Navbar,NavbarBrand,NavLink,Button} from "reactstrap";
import {withRouter} from "react-router-dom";
import ImageLoader from 'react-load-image';
import "./CSS/common.css";
import "./CSS/mocklesson.css";

class Lesson1 extends Component {
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
    else if(value.target.id=="All"){
      this.props.history.push("/All",this.props.history.location.state);
    }

    else if(value.target.id=="WTM"){
      this.props.history.push("/WTM1",this.props.history.location.state);
    }

    else{
      this.props.history.push("/progress",this.props.history.location.state);
    }

  }


  render(){
    var apo="'";
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

      <div id="test">
        <div className="row">
          <div className="column">
          <h1>Videogame Graphics</h1>
            <img src={require("./images/image3.png")}/>
            <div id="leftText">
            Imagine being able to be the creator of the next biggest game!
            People will forget about Fornite and play the newest epic game ever.
            But how does Fortnite get its graphics to be perfect? Easy, computer graphics!
            </div>

          </div>

          <div className="column">
            <div id="altCol">
              <img src={require("./images/image4.gif")}/>
              <h1><strong>??HOW DID YOU GET THIS??</strong></h1>
              <Button id="WTM" className="links" onClick={this.routeChange}>Find Out Here!</Button>
            </div>
          </div>
<img src={require("./images/image2.gif")}/>
        </div>

      </div>

      <div>
        <Button id="All" className="Buttons" onClick={this.routeChange}>All Concepts</Button>
      </div>
      </>
    );
  }

}
export default withRouter(Lesson1);
