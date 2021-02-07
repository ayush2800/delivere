import logo from '../images/hello.jpg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class About extends React.Component {
    render(){
    return (
      <div> 
        <img src={logo} style={{"width":"100%","height":"400px"}} />
        <div class="row guest-content pa-4"><div class="text-center col col-12"><h1>Hi, thanks for stopping by. We're so pleased to meet you. </h1></div></div>
        <div class="row guest-content pa-4"><div class="mx-auto col-md-8 col-12"><p class="pt-2">
                    We are pleased to meet you , please contact us at xyz@justdeliver.com
                </p></div></div>
      </div>
      );
    }
}

