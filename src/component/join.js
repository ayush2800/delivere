
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import logo from '../images/hello.jpg';






export default class About extends React.Component {

    render(){   
    return (  
        <div>
        <div style={{"width":"80%","margin": "0% 10%"}}> 
        <img src={logo} style={{"width":"100%","height":"400px"}} />
        <div class="row guest-content pa-4"><div class="text-center col col-12"><h1>Hi, thanks for stopping by </h1></div></div>
        <div class="row guest-content pa-4"><div class="mx-auto col-md-8 col-12">
            <p class="pt-2">
                    Wanna join our amazing journey please go ahead and fill the form
            </p>
        </div>
        </div>
        <h3 >
                    Please fill the form to join us.
        </h3>
      </div>  

        <div style={{"width":"80%","margin": "0% 10%"}}>
        <Form>
            <Form.Group controlId="formBasicFullName">
            <Form.Control type="Full Name" placeholder="Full Name" />
            <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCompany">
            <Form.Control type="Company" placeholder="Company" />
            </Form.Group>
            <Form.Group controlId="formBasicPhone">
            <Form.Control type="Phone" placeholder="Phone" />
            </Form.Group>  
            <Form.Group controlId="formBasicEmail">
            <Form.Control type="Email" placeholder="Email" />
            </Form.Group>
            {/* <Form.Group controlId="formBasicAddress">
                <Form.Label>Password</Form.Label>
            <Form.Control type="Address" placeholder="Address" />
            <Form.Text className="text-muted"></Form.Text>
            </Form.Group> */}
            <Form.Group controlId="formBasicAddress">
            <Form.Control type="Address" placeholder="Address" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
            <Form.Control type="postcode" placeholder="postcode" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit">Contact us</Button>
        </Form>
        </div>
      </div>    
        );
      }



}

