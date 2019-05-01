import React,{Component} from "react";
import {Nav,Navbar,NavbarBrand,NavLink,Button} from "reactstrap";
import {withRouter} from "react-router-dom";
//import "./CSS/common.css";
import "./CSS/WTM1.css";
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
    var GT =">";
    var LT ="<";
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
          <h1>What are Quadratics?</h1>
        </div>


        <div className="subcontent">
          <p id="ptag">
          From 8th to 10th grade we’ve done basic algebra where you can visualize lines and analyze word problems. What about using algebra to create moving objects!<br/><br/>

          Quadratics:<br/>
          Ever noticed the path a ball takes when you and your friend play catch? Or when your favorite stuntman jumps off of a building?<br/>
          These paths can be visualized using quadratics!<br/><br/>

          A quadratic is an equation like <Latex>$y = x^2, y = 3x^2 - 5$, or $y = - \frac 1 4 x^2 + 3x + 10$</Latex>.
          Use Desmos to graph these equations. What are some commonalities that you noticed between these graphs?<br/><br/>

          Something points that I noticed were:<br/>
          Every point on the y-axis occurs at two places on the x-axis EXCEPT at one point<br/>
          This point is called the vertex. It is where the graph changes direction, and it is symmetric around this point.<br/><br/>

          The standard form for a quadratic equation is <Latex>$y = ax^2 + bx + c$</Latex><br/>
          determines the direction of a quadratic (+ looks like a smiley face, - looks like a frowny face)<br/>
          a represents the stretch of a graph.<br/><br/>
          If |a| {GT} 1 the graph gets skinnier if  0 {LT} |a| {LT} 1 then the graph gets wider<br/>
          b represents a shift in where the graph intersects the x-axis<br/>
          c represents a vertical shift in the graph<br/><br/>
          </p>
        </div>

        <div>
          <Button id="All" className="Buttons" onClick={this.routeChange}>All Concepts</Button>
          <Button id="Test" className="Buttons" onClick={this.routeChange}>Test Yourself</Button>
        </div>


      </div>



      </>
    );
  }

}
export default withRouter(WTM1);
