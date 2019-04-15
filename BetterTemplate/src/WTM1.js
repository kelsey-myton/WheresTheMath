import React,{Component} from "react";
import {Button} from "reactstrap";
import {withRouter} from "react-router-dom";
import "./CSS/common.css";
import "./CSS/WTM1.css";

class WTM1 extends Component {
  constructor(props){
    super(props);
    this.routeChange=this.routeChange.bind(this);
  }

  routeChange(value){
    if (value.target.id=="All"){
        this.props.history.push("/All");
    }
    else if (value.target.id=="Test"){
      this.props.history.push("/other");
    }
    else if (value.target.id=="Home"){
      this.props.history.push("/home");
    }
    else if (value.target.id=="Back"){
      this.props.history.goBack();
    }
  }


  render(){
    return(
      <>
      <div>
        <Button id="Back" onClick={this.routeChange}>Back</Button>
        <Button id="Home" onClick={this.routeChange}>Home</Button>
      </div>

      <div>
      You Clicked A Wheres the Math Button, Here it is
      </div>


      <div>
        <Button id="All" onClick={this.routeChange}>All Concepts</Button>
        <Button id="Test" onClick={this.routeChange}>Test Yourself</Button>
      </div>
      </>
    );
  }

}
export default withRouter(WTM1);
