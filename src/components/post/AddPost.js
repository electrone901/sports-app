import React, { Component } from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import './AddPost.css'
import axios from 'axios';




import { IoIosAnalytics, IoIosAdd } from "react-icons/io";





class AddPost extends Component {

	constructor(props) {
		super(props);
		this.state = {
    	
 		};
  	}

   componentDidMount() {	
   	console.log(JSON.stringify(localStorage.jwtToken));
	 		
	}


	componentWillReceiveProps(pp){
		
	}

	handleSubmit(event) {
	    console.log(event);
	    //alert("this");
	    event.preventDefault();
      	event.stopPropagation();
      	

      	var name= document.getElementById("addPost").elements["game"].value;
      	console.log(name);
 
  	}

  	skip(){
  		
  		window.location.href = "./";
  	}

  	handleSubmit(event) {
	    console.log(event);
	    //alert("this");
	    event.preventDefault();
      	event.stopPropagation();
      	

      	var game= document.getElementById("addPost").elements["game"].value;
      	var level = document.getElementById("addPost").elements["level"].value;
      	var goal = document.getElementById("addPost").elements["goal"].value;
      	var city = document.getElementById("addPost").elements["city"].value;
      	var id = 122;




      	var params = {};
      	params.favoriteSport = game;
      	params.level = level;
      	params.city = goal;
      	params.goal = city;

		axios.defaults.headers.common['authenticationtoken'] = localStorage.jwtToken;
		axios.post("https://meetsportserver.herokuapp.com/feed", params)
	  	.then(response => {
	  		console.log('response',response)
	  	})
       .then(res => {
           return console.log(res);
       })
       .catch((err) => {
           console.log('There was a problem with your fetch request' + err.message);
       });

  	}







	render() {
	  	return (

			<Container className="fe1">
				<span className="tag1">
					One more step...
				</span>
					<br/>
					<br/>
					<br/>
					<div className="Form124">

						

						<Form onSubmit={e => this.handleSubmit(e)} id="addPost" >
						<Form.Group controlId="exampleForm.ControlSelect1">
						    <Form.Label>YOUR FAVORITE SPORT TO PLAY</Form.Label>
						    <Form.Control as="select" name ="game">
						      <option>Football</option>
						      <option>Basketball</option>
						      <option>tennis</option>
						      <option>hockey</option>
						    </Form.Control>
						 </Form.Group>

						 <Form.Group controlId="exampleForm.ControlSelect1">
						    <Form.Label>YOUR LEVEL</Form.Label>
						    <Form.Control as="select" name ="level">
						      <option>Beginner</option>
						      <option>Intermediate</option>
						      <option>Advanced</option>
						    </Form.Control>
						 </Form.Group>

						 <Form.Group controlId="exampleForm.ControlSelect1">
						    <Form.Label>GOAL OF JOINING</Form.Label>
						    <Form.Control as="select" name ="goal">
						      <option>Looking for sportsmates</option>
						      <option>Looking for team</option>
						      <option>Looking for players to join the team</option>
						      <option>Open for new suggestion</option>
						    </Form.Control>
						 </Form.Group>
 
						  <Form.Group controlId="exampleForm.ControlInput1">
						    <Form.Label>YOUR CITY</Form.Label>
						    <Form.Control type="text" placeholder="city" name ="city" />
						  </Form.Group>
						  <div className="clickArrow">
								<br/>

								<Button className="submitButton1" onClick={this.skip}>    Skip  </Button>

								<Button className="submitButton1" type="submit">Submit</Button>

								
		  					</div>

						</Form>
					</div>
					
					
				
			</Container>
	    )
  }
}


export default AddPost; 