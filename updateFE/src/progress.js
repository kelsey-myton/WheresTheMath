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

      <header id="topbutt">
        <Button id="Back" className="topButton" onClick={this.routeChange}>Back</Button>
        <Button id="Home" className="topButton" onClick={this.routeChange}>Home</Button>
      </header>

      <div id="TitleText">
      Check your Progress
      </div>

      <p> Alegbra</p>
      <div className= "container" >
      <div className= "skills Algebra"> 60%
      </div>
      </div>

      <p> Geometry</p>
      <div className= "container" >
      <div className= "skills Geometry"> 30%
      </div>
      </div>

      </>
    );
  }

}
export default withRouter(Progress);
