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
    this.getQuiz=this.getQuiz.bind(this);
    this.handleQuiz=this.handleQuiz.bind(this);
    this.state={
      quiz:"",
      numQRight:0,
      user:"filler",
      numQTotal:1
    }
  }


  routeChange(value){
    if(value.target.id=="Home"){
        this.props.history.push("/home",this.props.history.location.state.user);
    }
    else if (value.target.id=="Back"){
      this.props.history.goBack();
    }
    else if(value.target.id=="Extra"){
      this.props.history.push("/extrahelp",this.props.history.location.state.user);
    }
    else{
      this.props.history.push("/progress",this.props.history.location.state.user);
    }
  }
  Change(value){
    alert(value);
  }

  getQuiz(value){
    var quizname={quizname:value.target.id};
    var url='/api/generatequiz';
    //console.log(quizname);
    const req = new Request(url,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(quizname),
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
    .then(q => this.setState({quiz:q},()=> console.log("")));
  }

  handleQuiz(value,quizName){
    var lst=[]
    var LstOfButtons;
    var numCorrect=0;
    const keys = Object.entries(this.state.quiz)

    for (const key of keys) {
      lst.push("this gets num questions in a weird way")
      }

    var NumQ=lst.length;
    for(var i=1;i<=NumQ;i++){
      LstOfButtons=document.getElementsByName(i);
      for(var j=0;j<4;j++){
        if(LstOfButtons[j].value==="true" && LstOfButtons[j].checked){
          numCorrect=numCorrect+1;
        }
      }
    }
    this.setState({numQRight:numCorrect,user:this.props.history.location.state.user,numQTotal:NumQ});
  }

  render(){

    function StringEditor(display){
      var lst=[];
      if(display==null){
        return " ";
      }
      display=display+"|";
      var buffer=display;
      var letter="a";
      var sub;
      var start;
      var stop;
      for(var i=0;i<4;i++){
        if (i==1){
          letter="b"
        }
        else if (i==2){
          letter="c"
        }
        if (i==3){
          letter="d"
        }
        start=buffer.indexOf(letter);
        stop=buffer.indexOf("|");

        sub=buffer.substring(start,stop);
        buffer=buffer.substring(stop+1,buffer.length);
        lst.push(sub);
      }
      return lst;
    }

    var greet=<div>Test Yourself</div>
    var blah="";
    var loadQuiz="";
    var button;
    var submit;
    var properName;

    if(this.props.history.location.state.user.user_name==this.state.user.user_name){
      this.props.history.push("/results",this.state);
    }


    if(this.props.history.location.state.prevPath==="/WTM1"){
      loadQuiz="ALGEBRA_quadratics"
      properName="Quadratics Quiz";
    }
    else if(this.props.history.location.state.prevPath==="/WTM2"){
      loadQuiz="ALGEBRA_percent"
    }
    if(this.state.quiz===""){
      button=<Button className="Buttons" id={loadQuiz} onClick={this.getQuiz}>Begin</Button>
    }

    if(this.state.quiz!==""){
      var PropDisplay=StringEditor(this.state.quiz.display_options);
      greet=<div>{properName}</div>
      submit=<Button className="Buttons" onClick={this.handleQuiz}>Submit</Button>
      blah=
      <>
        {this.state.quiz.map(q =>
          <div className="Questions">
          {q.question_number}). {q.question}
          <div className="Options">
          {StringEditor(q.display_options).map(r=>
          <div>
            <label>
            <input type="radio" value={r[0]===q.answer} name={q.question_number}/>
            <Latex>{r}</Latex>
            </label>
            </div>
          )}
          </div>
          </div>
        )}
      </>
    }

    return(
      <>
      <div id="topbutt">
        <Button className="Buttons" id="Back" onClick={this.routeChange}>Back</Button>
        <Button className="Buttons" id="Home" onClick={this.routeChange}>Home</Button>
      </div>

      <div id="TitleText">
        {greet}
        {button}
        {blah}
        {submit}
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
