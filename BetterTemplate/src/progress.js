import React,{Component} from "react";
import {Button} from "reactstrap";
import {withRouter} from "react-router-dom";
import "./CSS/common.css";
import "./CSS/progress.css";

class Progress extends Component {
  constructor(props){
    super(props);
    this.routeChange=this.routeChange.bind(this);
  }

  routeChange(value){
    if (value.target.id=="Back"){
        this.props.history.goBack();
    }
    else if (value.target.id=="Home"){
      this.props.history.push("/home");
    }
    else{
      this.props.history.push("/All");
    }

  }

  render(){
    return(
      <>
      <div>
      This is the progress page
      </div>

      <div>
        <Button id="Back" onClick={this.routeChange}>Back</Button>
        <Button id="Home" onClick={this.routeChange}>Home</Button>
        <Button id="All" onClick={this.routeChange}>All Concepts</Button>
      </div>
      </>
    );
  }

}
export default withRouter(Progress);
