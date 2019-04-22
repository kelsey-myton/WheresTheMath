import React,{Component} from "react";
import {Button} from "reactstrap";
import {withRouter} from "react-router-dom";
import "./CSS/common.css";
import "./CSS/AllConcepts.css";
import "./home";

class AllC extends Component {
  constructor(props){
    super(props);
    this.routeChange=this.routeChange.bind(this);
  }

  routeChange(value){
    console.log(value.target.id);
    if(value.target.id=="Home"){
        this.props.history.push("/home");
    }
    else if (value.target.id=="Back"){
      this.props.history.goBack();
    }
    else if(value.target.id=="Test"){
      this.props.history.push("/test");
    }
    else if(value.target.id=="Gaming"){
      this.props.history.push("/home"); //change later
    }
    else if(value.target.id=="Baking"){
      this.props.history.push("/home"); //change later
    }
    else{
      this.props.history.push("/progress");
    }

  }


  render(){
    return(
      <>
      <title>
        Wheres the Math?
      </title>

      <div id="topbutt">
        <Button id="Back" className="topButton" onClick={this.routeChange}>Back</Button>
        <Button id="Home" className="topButton" onClick={this.routeChange}>Home</Button>
      </div>

      <div id="TitleText">
      All Concepts
      </div>

      <div id="subject">
      Algebra
      <a id="Baking" className="interbutt" onClick={this.routeChange}>Baking</a>
      <a id="Gaming" className="interbutt" onClick={this.routeChange}>Gaming</a>
      </div>

      <div id="subject">
      Geometry
      <a id="sample" className="interbutt" >Fashion</a>
      <a id="sample" className="interbutt"> Sports</a>
      </div>

      <div>
        <Button id="Test" className="bottombutton" onClick={this.routeChange}>Test Yourself</Button>
        <Button id="Progress" className="bottombutton" onClick={this.routeChange}>Progress</Button>
      </div>
      </>
    );
  }

}
export default withRouter(AllC);
