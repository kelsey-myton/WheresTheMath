import React,{Component} from "react";
import {Button} from "reactstrap";
import {withRouter} from "react-router-dom";
import "./CSS/common.css";
import "./CSS/testyourself.css";

class Test extends Component {
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
    else if(value.target.id=="Extra"){
      this.props.history.push("/extra");
    }
    else{
      this.props.history.push("/progress");
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
      Quiz Here, time for some fancy SQL
      </div>

      <div>
        <Button id="Extra" onClick={this.routeChange}>Extra Help</Button>
        <Button id="Progress" onClick={this.routeChange}>Progess</Button>
      </div>
      </>
    );
  }

}
export default withRouter(Test);
