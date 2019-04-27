import React,{Component} from "react";
import {Button} from "reactstrap";
import {withRouter} from "react-router-dom";
import "./CSS/common.css";
import "./CSS/WTM1.css";

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
    if(JSON.stringify(this.state.prevPath)==JSON.stringify(this.props.history.location.pathname)){
      this.props.history.push("/test",this.state);
    }
    var GT =">";
    var LT ="<";
    return(
      <>
      <header id="topbutt">
        <Button id="Back" className="Buttons" onClick={this.routeChange}>Back</Button>
        <Button id="Home" className="Buttons" onClick={this.routeChange}>Home</Button>
      </header>

      <div id="TitleText">
        <h1>What are Quadratics?</h1>
        <div id="makeMeLeft">
        From 8th to 10th grade we’ve done basic algebra where you can visualize lines and analyze word problems. What about using algebra to create moving objects!<br/><br/>

        Quadratics:<br/>
        Ever noticed the path a ball takes when you and your friend play catch? Or when your favorite stuntman jumps off of a building?<br/>
        These paths can be visualized using quadratics!<br/><br/>

        A quadratic is an equation like y = x2, y = 3x2 - 5, or y = .25x2 + 3x + 10<br/>
        Use Desmos to graph these equations. What are some commonalities that you noticed between these graphs?<br/><br/>

        Something points that I noticed were:<br/>
        Every point on the y-axis occurs at two places on the x-axis EXCEPT at one point<br/>
        This point is called the vertex. It is where the graph changes direction, and it is symmetric around this point.<br/><br/>

        The standard form for a quadratic equation is y = ax2 + bx + c<br/>
        determines the direction of a quadratic (+ looks like a smiley face, - looks like a frowny face)<br/>
        a represents the stretch of a graph.<br/><br/>
        If |a| {GT} 1 the graph gets skinnier if  0 {LT} |a| {LT} 1 then the graph gets wider<br/>
        b represents a shift in where the graph intersects the x-axis<br/>
        c represents a vertical shift in the graph<br/><br/>
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
