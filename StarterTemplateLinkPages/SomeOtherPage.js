import React,{Component} from "react";
//import withRouter from "react-router-dom";

class Other extends Component {
  constructor(props){
    super(props);
    this.routeChange=this.routeChange.bind(this);
  }

  routeChange(value){
    this.props.history.push("/");
  }

  render(){
    return(
      <div>The Other Page
      <button onClick={this.routeChange}>to Home Page</button>
      </div>
    );
  }

}
export default Other;
