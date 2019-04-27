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
        this.props.history.push("/home",this.props.history.location.state);
    }
    else if (value.target.id=="Back"){
      this.props.history.goBack();
    }
    else if(value.target.id=="Test"){
      this.props.history.push("/test",this.props.history.location.state);
    }
    else if(value.target.id=="Gaming"){
      this.props.history.push("/lesson1",this.props.history.location.state);
    }
    else if(value.target.id=="Baking"){
      this.props.history.push("/lesson2",this.props.history.location.state);
    }
    else{
      this.props.history.push("/progress",this.props.history.location.state);
    }

  }


  render(){
    return(
      <>
      <title>
        Wheres the Math?
      </title>

      <header id="topbutt">
       <Button id="Back" className="Buttons" onClick={this.routeChange}>Back</Button>
       <Button id="Home" className="Buttons" onClick={this.routeChange}>Home</Button>
     </header>

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
        <Button id="Progress" className="bottombutton" onClick={this.routeChange}>Progress</Button>
      </div>

      </>
    );
  }

}
export default withRouter(AllC);
