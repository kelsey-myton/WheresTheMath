import React,{Component} from "react";
import {Button} from "reactstrap";
import {withRouter} from "react-router-dom";
//import withRouter from "react-router-dom";

class Home extends Component {
  constructor(props){
    super(props);
    this.routeChange=this.routeChange.bind(this);
  }

  routeChange(value){
    this.props.history.push("/other");
  }

  render(){
    return(
      <html>
      <div>
      This is the home page
      </div>

      <div>
        <Button onClick={this.routeChange}>to Some Other Page</Button>
      </div>
      </html>
    );
  }

}
export default withRouter(Home);
