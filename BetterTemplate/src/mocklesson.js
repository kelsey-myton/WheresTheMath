import React,{Component} from "react";
import {Button} from "reactstrap";
import {withRouter} from "react-router-dom";
import "./CSS/common.css";
import "./CSS/mocklesson.css";

class Lesson1 extends Component {
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
    else if(value.target.id=="All"){
      this.props.history.push("/All");
    }

    else if(value.target.id=="WTM"){
      this.props.history.push("/WTM1");
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
        this marquee is purely a joke
        <marquee behavior="alternate" scrollamount="20" width="500px">
        <Button id="WTM" onClick={this.routeChange}>Found the Math</Button>
        </marquee>
      </div>


      <div>
      Lesson Here
      </div>

      <div>
        <Button id="All" onClick={this.routeChange}>All Concepts</Button>
        <Button id="Progress" onClick={this.routeChange}>Progess</Button>
      </div>
      </>
    );
  }

}
export default withRouter(Lesson1);
