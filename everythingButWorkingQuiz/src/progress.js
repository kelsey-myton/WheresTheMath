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
      this.props.history.push("/home",this.props.history.location.state);
    }
    else{
      this.props.history.push("/All",this.props.history.location.state);
    }

  }

  render(){
    var num_Alg=0;
    var num_Geom=0;
    var total_Alg=10;
    var total_Geom=12;

    if(this.props.history.location.state != null){
      var num_Alg=this.props.history.location.state.Num_Lessons_Compl_Alg;
    }

    if(this.props.history.location.state != null){
      var num_Geom=this.props.history.location.state.Num_Lessons_Compl_Geom;
    }

    var perc_Alg=parseFloat(Math.round(100*num_Alg/total_Alg).toFixed(2));
    var perc_Geom=parseFloat(Math.round(100*num_Geom/total_Geom).toFixed(2));

    perc_Alg=JSON.stringify(perc_Alg);
    perc_Alg=perc_Alg+"%";

    perc_Geom=JSON.stringify(perc_Geom);
    perc_Geom=perc_Geom+"%";

    const STYLE1= {width: perc_Alg};
    const STYLE2= {width: perc_Geom};

    return(
      <>
      <header id="topbutt">
        <Button id="Back" className="Buttons" onClick={this.routeChange}>Back</Button>
        <Button id="Home" className="Buttons" onClick={this.routeChange}>Home</Button>
      </header>

      <div id="TitleText">
      Check your Progress
      </div>

      <p> Alegbra</p>
      <div className= "container" >
      <div style={STYLE1} className= "skills Algebra"> {perc_Alg}
      </div>
      </div>

      <p> Geometry</p>
      <div className= "container" >
      <div style={STYLE2}className= "skills Geometry"> {perc_Geom}
      </div>
      </div>

      </>
    );
  }

}
export default withRouter(Progress);
