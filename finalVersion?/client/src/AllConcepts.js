import React,{Component} from "react";
import {Nav,Navbar,NavbarBrand,NavLink,Button} from "reactstrap";
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
    else if(value.target.id=="Progress"){
      this.props.history.push("/progress",this.props.history.location.state);
    }

  }


  render(){
    var apo="'";
    return(
      <>
      <title>
        Where{apo}s the Math?
      </title>


     <div className= "navlength">
       <Navbar className="Navbar">
           <Nav className="Nav">
           <NavbarBrand className="navbrand"> Where{apo}s The Math?</NavbarBrand>
               <NavLink><Button id="Home" className="navitem" onClick={this.routeChange}> Home</Button></NavLink>
               <NavLink><Button id="Progress" className="navitem" onClick={this.routeChange}>Progress </Button></NavLink>
           </Nav>
       </Navbar>
     </div>

      <div id="TitleText">
      All Concepts
      </div>

      <div className="contentConecpts">

        <div className="subcontentConcepts">

          <div className="column1Concepts">
            <div className="Math">
              <strong>Algebra</strong>
            </div>
            <div><a  id="Baking" className="interbutt" onClick={this.routeChange}>Baking</a></div><br/>
            <div className="hey"><a  id="Gaming" className="interbutt" onClick={this.routeChange}>Gaming</a></div>
          </div>

          <div className="column2Concepts">
            <div className="Math">
              <strong>Geometry</strong>
            </div>
            <div><a className="AllLinks" id="sample" className="interbutt" onClick={this.routeChange}>Fashion</a></div><br/>
            <div><a className="AllLinks" id="sample" className="interbutt" onClick={this.routeChange}>Sports</a></div>
          </div>

        </div>
      </div>


      </>
    );
  }

}
export default withRouter(AllC);
