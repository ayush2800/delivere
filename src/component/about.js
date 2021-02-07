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
                    In case you haven't noticed, at deliverE, we're a little bit different from the rest. We're an idea born
                    out of wanting to fix all the not-so-good things about parcel delivery.
                </p> <p class="pt-2">
                    We're proud to be Australian-owned and operated. Our founding team have a combined total of 35 plus
                    years in the courier and logistics industry - so we know a thing or two about parcel delivery and what
                    our customer want and expect from a courier company.
                </p> <p class="pt-2">
                    We also know that working Australians, particularly the underemployed, want options to boost their
                    income (and perhaps boost their self-esteem in an otherwise tough job market). Our drivers are just
                    regular Joe (and Josephine!) Bloggs - hard working Aussie's, honest and reliable, looking for ways to
                    earn a crust and support their families. If you have some form of reliable transport, you can be a
                    deliverE driver and join us in making deliverE the next big thing. We call it - <span class="font-weight-bold">DYO</span> - drive your own.
                </p> <p class="pt-2">
                    So, if you're looking for extra income, have your own bike, car, ute, van or other motorised vehicle,
                    then why not check out how to join us and start your career with deliverE.
                </p> <p class="pt-2">
                    We can't wait to meet you!
                </p></div></div>
      </div>
      );
    }
}

