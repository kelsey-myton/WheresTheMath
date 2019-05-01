import React,{Component} from "react";
import {Nav,Navbar,NavbarBrand,NavLink,Button} from "reactstrap";
import {withRouter} from "react-router-dom";
import "./CSS/common.css";
import "./CSS/WTM2.css";
var Latex = require('react-latex');

class WTM1 extends Component {
  constructor(props){
    super(props);
    this.routeChange=this.routeChange.bind(this);
    this.state={
      prevPath:"/",
      user:"filler"
    }
  }

  routeChange(value){
    if (value.target.id=="All"){
        this.props.history.push("/All",this.props.history.location.state);
    }
    else if (value.target.id=="Test"){
      this.setState({prevPath:this.props.history.location.pathname,user:this.props.history.location.state});
    }
    else if (value.target.id=="Home"){
      this.props.history.push("/home",this.props.history.location.state);
    }
    else if (value.target.id=="Back"){
      this.props.history.goBack();
    }
  }



  render(){


    var apo="'";
    if(JSON.stringify(this.state.prevPath)==JSON.stringify(this.props.history.location.pathname)){
      this.props.history.push("/test",this.state);
    }
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

      <div className="content">

        <div className="headerDiv">
          <h1>What are Percentages?</h1>
        </div>

        <div className="subcontent">
          <p id="ptag">
          A percent is a fancy way to represent a fraction with 100 as a denominator
          It is represented by the symbol %

          If you baked enough cake for 50 cake pops but only need 10, what percent of the cake will you use?

          In fractional form, it is frac{10}{50}.
          Since a percent is a fraction  with a denominator of 100 we have to convert 10/50 to x/100:<br/><br/>
          <div id="inner">
          50*2 = 100<br/>
          So x = 10*2 = 20
          </div><br/>
          Therefore, the percent is 20/100 which can be represented as 20%<br/><br/>
          ANOTHER APPROACH
          Convert to decimal form and multiply by 100
          10/50= 0.2 = 20%

          Identifying Percents in every day life:
          Flash Sale! EVERYTHING 75% OFF!
          75% off means that the new price is 75% off of the old price
          new price = old price - 0.75*old price
                              = old price (1 - 0.75)
          	       = 0.25 * old price
          Therefore, 75% off is 1-0.75 * old price<br/><br/>

          Hint #1: “of” usually means you have to multiply the two numbers<br/>
          Hint #2: Always convert percents to decimals before doing anything else
          </p>
        </div>
      </div>



      <div>
        <Button id="All" className="Buttons" onClick={this.routeChange}>All Concepts</Button>
        <Button id="Test" className="Buttons" onClick={this.routeChange}>Test Yourself</Button>
      </div>
      </>
    );
  }

}
export default withRouter(WTM1);
