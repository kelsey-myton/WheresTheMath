import React,{Component} from "react";
import {Button} from "reactstrap";
import {withRouter} from "react-router-dom";
import "./CSS/common.css";
import "./CSS/extraHelp.css";

class extra extends Component {
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
      this.props.history.push("/other");
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
      Extra Help<br></br>
      LINK1<br></br>
      LINK2...
      </div>

      <div>
        <Button id="Progress" onClick={this.routeChange}>Progess</Button>
      </div>
      </>
    );
  }

}
export default withRouter(extra);
