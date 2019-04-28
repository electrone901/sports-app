import React, { Component } from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import './Signup.css'


import { IoIosArrowForward } from "react-icons/io";





class AddEvent extends Component {

	constructor(props) {
		super(props);
		this.state = {
    	
 		};
  	}

   componentDidMount() {	
	 		
	}


	componentWillReceiveProps(pp){
		
	}



	render() {
	  	return (

			<Container className="fe1">
				<span className="tag1">
					Let's get to know each other
				</span>
					<br/>
					<br/>
					<br/>
					<div className="Form124">
						<Form>
						  <Form.Group controlId="exampleForm.ControlInput1">
						    <Form.Label>YOUR NAME</Form.Label>
						    <Form.Control type="text" placeholder="John Doe" />
						  </Form.Group>

						  <Form.Group controlId="exampleForm.ControlInput1">
						    <Form.Label>YOUR EMAIL</Form.Label>
						    <Form.Control type="email" placeholder="name@example.com" />
						  </Form.Group>

						  <Form.Group controlId="exampleForm.ControlInput1">
						    <Form.Label>PASSWORD</Form.Label>
						    <Form.Control type="password" placeholder="Password" />
						  </Form.Group>
						 
						</Form>
					</div>
					<div className="clickArrow">
					<br/>
					<IoIosArrowForward/>
						
  					</div>
					
				
			</Container>
	    )
  }
}


export default AddEvent; 