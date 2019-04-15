import React,{Component} from "react";
import {Button} from "reactstrap";
import {withRouter} from "react-router-dom";
import "./CSS/common.css";
import "./CSS/AllConcepts.css";

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

      <div>
        <Button id="Back" onClick={this.routeChange}>Back</Button>
        <Button id="Home" onClick={this.routeChange}>Home</Button>
      </div>

      <div>
      All Concepts
      </div>

      <div>
        <Button id="Test" onClick={this.routeChange}>Test Yourself</Button>
        <Button id="Progress" onClick={this.routeChange}>Progress</Button>
      </div>
      </>
    );
  }

}
export default withRouter(AllC);
