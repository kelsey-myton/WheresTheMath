import React,{Component} from "react";
import {Button} from "reactstrap";
import {withRouter} from "react-router-dom";
import ImageLoader from 'react-load-image';
import "./CSS/common.css";
import "./CSS/mocklesson2.css";

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
      this.props.history.push("/WTM2",this.props.history.location.state);
    }

    else{
      this.props.history.push("/progress",this.props.history.location.state);
    }

  }


  render(){
    return(
    <>
    <header id="topbutt">
      <Button className="Buttons" id="Back" onClick={this.routeChange}>Back</Button>
      <Button className="Buttons" id="Home" onClick={this.routeChange}>Home</Button>
    </header>

    <div id="test">
      <div className="row">

        <div className="column">

        <div id="NitPick">RECIPE<h1 id="So">So you want to Bake?</h1>
          <img src={require("./images/image1.jpg")}/>
          Ready in <strong>20 minutes</strong><br/>
          Serves <strong>1 baker</strong>
          <ol id="OL">
          <li>2.Time to Decorate!  3 of your friends want chocolate frosting, 2 want vanilla with sprinkles, you and 4 others want red velvet and 2 of those friends want sprinkles.</li><br/><br/>
          <li>4.Each tube of frosting serves 10 cake pops, what percent of the tubes will you use for each?</li>
          </ol>
        </div>

        </div>

        <div className="column">
        <div id="altCol">
          <h1>Ingredients for Success</h1>
          <li>3 dashes of time</li>
          <li>2 spoons of curiosity</li>
          <li>1 Passion for Baking</li>
          <li>Dash of Math</li>
          <h1>Preparation</h1>
            <ol id="OL">
            <li>1. Baking is a fun pass time for a rainy day or for a summer pool party You want to bake cake pops for a July 4th celebration.How many people are coming? What do you need to get started?</li>
            <li>3.The directions on the box of cake mix clearly direct you to make the cake and the cake has been cooled. This box made 30 cake pops.</li>
            </ol>
        </div>

        </div>
          <ol id="OL">
          <li>5.<Button id="WTM" onClick={this.routeChange}>Problem</Button> How many more people can you invite to the pool party? Will you have enough frosting to frost each one?</li>
          </ol>
          <h1>Tips</h1>
          Create the graph using Desmos and write down all the facts you know<br/><br/>
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
