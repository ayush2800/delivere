
import './App.css';
import React from 'react';
import About from "./component/about" ;
import Home from "./component/home" ;
import Contact from "./component/contact" ;
import Join from "./component/join" ;
import 'bootstrap/dist/css/bootstrap.min.css';



export default class App extends React.Component {

  constructor() {
    super();
    this.state = {tab: "first-tab"};
  }

  MyFunction = (e) => {

    this.setState({tab: e.target.dataset.id});
    
  }
  

  render(){

    return (

      <div data-new-gr-c-s-check-loaded="14.993.0" data-gr-ext-installed="">
        <div style={{"height":"90px"}}>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top" style={{"height":"90px"}}>
          <div class="navbar-brand" href="#">DeliverE</div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse " id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item"  id="first-tab"  >
                <div class={"nav-link " + (this.state.tab==="first-tab" ? "active":"" )} data-id="first-tab" onClick={ this.MyFunction}>Home</div>
              </li>
              <li class="nav-item"  id="second-tab" >
                <div class={"nav-link " + (this.state.tab==="second-tab" ? "active":"" )} data-id="second-tab" onClick={this.MyFunction}>About</div>
              </li>
              <li class="nav-item" id="third-tab">
                <div class={"nav-link " + (this.state.tab==="third-tab" ? "active":"" )} data-id="third-tab" onClick={this.MyFunction}>Join</div>
              </li>
              {/* <li class="nav-item"   id="fourth-tab">
                <div class={"nav-link " + (this.state.tab==="fourth-tab" ? "active":"" )} data-id="fourth-tab" onClick={this.MyFunction}>Track</div>
              </li> */}
              <li class="nav-item"  id="fifth-tab">
                <div class={"nav-link " + (this.state.tab==="fifth-tab" ? "active":"" )} data-id="fifth-tab" onClick={this.MyFunction} >Contact</div>
              </li>
              
            </ul>
          </div>
        </nav>
        </div>
        <div>
            {(() => {

                switch (this.state.tab) {
                  case "first-tab":{return(<div><Home/></div>)}
                  break;
                  case "second-tab":{return(<div><About/></div>)}
                  break;
                  case "third-tab": {return(<div><Join/></div>)}
                  break;
                  case "fifth-tab": {return(<div><Contact/></div>)}
                  break;
                  default:{return(<div><Home/></div>)}
                  break;
                }
                
          
            })()}
        </div>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery-slim.min.js"></script>')</script>
        <script src="../../assets/js/vendor/popper.min.js"></script>
        <script src="../../dist/js/bootstrap.min.js"></script>


        </div>
      );
    }
}

