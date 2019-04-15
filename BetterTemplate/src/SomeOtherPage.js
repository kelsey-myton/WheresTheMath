import React,{Component} from "react";
import "./CSS/SomeOtherPage.css";

class Other extends Component {
  constructor(props){
    super(props);
    this.routeChange=this.routeChange.bind(this);
  }

  routeChange(value){
    this.props.history.push("/home");
  }

  render(){
    return(
      <div>The Other Page, if you see this, you havent created
      the thing you clicked yet or miss linked it<br></br>
      <button onClick={this.routeChange}>to Home Page</button>
      </div>
    );
  }

}
export default Other;
