import React,{Component} from "react";
import {Button} from "reactstrap";
import {withRouter} from "react-router-dom";
import "./CSS/common.css";
import "./CSS/testyourself.css";
var Latex = require('react-latex');

class Test extends Component {
  constructor(props){
    super(props);
    this.routeChange=this.routeChange.bind(this);
    this.state={
      numUpdate:0,
    }
  }


  routeChange(value){
    var u=this.props.history.location.state.user;
    var replacer={
      Num_Lessons_Compl_Alg:u.Num_Lessons_Compl_Alg+1,
      Num_Lessons_Compl_Geom:u.Num_Lessons_Compl_Geom,
      RecentLesson:u.RecentLesson,
      user_id: u.user_id,
      user_name:u.user_name

    }
    this.props.history.replace(replacer);
    console.log(this.props.history.location);

    if(value.target.id=="Home"){
        this.props.history.push("/home",this.props.history.location);
    }
    else if (value.target.id=="Back"){
      this.props.history.goBack();
    }
    else if(value.target.id=="Extra"){
      this.props.history.push("/extrahelp",this.props.history.location);
    }
    else{
      this.props.history.push("/progress",this.props.history.location);
    }
  }

  render(){
    function UpdateProgress(user){
      var user={user_name:user};
      var url="/api/update";
      const req = new Request(url,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user),
      });
      fetch(req)
      .then((res)=>{
        if(res.status===500){
        res.json()
        .then((json)=>{
            const {message,stackTrace}=json;
          })
          .catch((error)=>{
            return Promise.reject(error);
          });
        }
        else{
          return res.json();
        }
      })
    }

    var Right=this.props.history.location.state.numQRight;
    var Total=this.props.history.location.state.numQTotal;
    var percent=parseFloat(Math.round(100*Right/Total).toFixed(2));
    var message="You got "+Right+" out of "+Total+" questions correct"
    var ScoreMessage="Your Score: "+percent+"%";
    var user=this.props.history.location.state.user.user_name

    UpdateProgress(user);

    console.log(this.props.history.location.state);

    return(
      <>
      <div id="topbutt">
        <Button className="Buttons" id="Home" onClick={this.routeChange}>Home</Button>
      </div>

      <div id="TitleText">
        Results:<br/>
        {message}<br/>{ScoreMessage}
      </div>


      <div>
        <Button className="Buttons" id="Extra" onClick={this.routeChange}>Extra Help</Button>
        <Button className="Buttons" id="Progress" onClick={this.routeChange}>Progess</Button>
      </div>
      </>
    );
  }

}
export default withRouter(Test);
