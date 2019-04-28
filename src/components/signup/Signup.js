import React, { Component } from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import './Signup.css'
import axios from 'axios';


import { IoIosArrowForward } from "react-icons/io";





class NameForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
    	
 		};
  	}

   componentDidMount() {	
   		console.log(localStorage.jwtToken1);
   		if(localStorage.jwtToken){
   			window.location.href = "./add-post";
   		}
	 		
	}


	componentWillReceiveProps(pp){
		
	}


	handleSubmit(event) {

	    console.log(event);
	    //alert("this");
	    event.preventDefault();
      	event.stopPropagation();
      	

      	var name= document.getElementById("registerUser").elements["name"].value;
      	var email = document.getElementById("registerUser").elements["emailId"].value;
      	var password = document.getElementById("registerUser").elements["password"].value;

      	var params = {};
      	params.name=name;
      	params.email=email;
      	params.password=password;

		axios.post("https://meetsportserver.herokuapp.com/user/signup", params)
	  	.then(response => {
	  		console.log('response',response)
	  		var token= response.data;
	  		var user = response.data.user;
        	localStorage.setItem('jwtToken',token.token);
        	localStorage.setItem('name',user.name);
			localStorage.setItem('userid',user._id);
			window.location.href = "./add-post";
	  	})
       .catch((err) => {
           console.log('There was a problem with your fetch request' + err.message);
       });

  	}



	    
	  



	render() {

		if(localStorage.jwtToken1){
   			window.location.href = "./add-post";
   		}
	  	return (

			<Container className="fe1">
				<span className="tag1">
					Let's get to know each other
				</span>
					<br/>
					<br/>
					<br/>
					<div className="Form124">
						<Form onSubmit={e => this.handleSubmit(e)} id="registerUser"  >
						  <Form.Group controlId="bame">
						    <Form.Label>YOUR NAME</Form.Label>
						    <Form.Control name="name" type="text" placeholder="John Doe" />
						  </Form.Group>

						  <Form.Group controlId="emailid">
						    <Form.Label >YOUR EMAIL</Form.Label>
						    <Form.Control name="emailId"  type="email" placeholder="name@example.com" />
						  </Form.Group>

						  <Form.Group controlId="password">
						    <Form.Label>PASSWORD</Form.Label>
						    <Form.Control name="password" type="password" placeholder="Password" />
						  </Form.Group>
						  	<div className="clickArrow">
								<br/>
								<Button className="submitButton" type="submit">Submit form</Button>
								<IoIosArrowForward/>
		  					</div>
						 
						</Form>
					</div>
					
					
				
			</Container>
	    )
  }
}


export default NameForm; 