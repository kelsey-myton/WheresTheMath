import React,{Component} from "react";
import {Button} from "reactstrap";
import {withRouter} from "react-router-dom";
import ImageLoader from 'react-load-image';

import "./CSS/mocklesson.css";

class Lesson1 extends Component {
  constructor(props){
    super(props);
    this.routeChange=this.routeChange.bind(this);
  }


  routeChange(value){
    //console.log(value.target.id);
    if(value.target.id=="Home"){
        this.props.history.push("/home",this.props.history.location.state);
    }
    else if (value.target.id=="Back"){
      this.props.history.goBack();
    }
    else if(value.target.id=="All"){
      this.props.history.push("/All",this.props.history.location.state);
    }

    else if(value.target.id=="WTM"){
      this.props.history.push("/WTM1",this.props.history.location.state);
    }

    else{
      this.props.history.push("/progress",this.props.history.location.state);
    }

  }


  render(){
    return(
      <>
      <header id="topbutt">
        <Button id="Back" className="Buttons" onClick={this.routeChange}>Back</Button>
        <Button id="Home" className="Buttons" onClick={this.routeChange}>Home</Button>
      </header>

      <div id="test">
        <div className="row">
          <div className="column">
          <h1>Videogame Graphics</h1>
            <img src={require("./images/image3.png")}/>
            <div id="leftText">
            Imagine being able to be the creator of the next biggest game!
            People will forget about Fornite and play the newest epic game ever.
            But how does Fortnite get its graphics to be perfect? Easy, computer graphics!
            </div>

          </div>

          <div className="column">
            <div id="altCol">
              <img src={require("./images/image4.gif")}/>
              <h1><strong>??HOW DID YOU GET THIS??</strong></h1>
              <Button id="WTM" onClick={this.routeChange}>Find Out Here!</Button>
            </div>
          </div>
<img src={require("./images/image2.gif")}/>
        </div>

      </div>

      <div>
        <Button id="All" className="Buttons" onClick={this.routeChange}>All Concepts</Button>
        <Button id="Progress" className="Buttons" onClick={this.routeChange}>Progess</Button>
      </div>
      </>
    );
  }

}
export default withRouter(Lesson1);
