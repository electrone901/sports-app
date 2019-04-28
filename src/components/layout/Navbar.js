import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
import logo from '../img/logo.png';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import './Navbar.css'


import { IoIosAnalytics, IoIosAdd, IoIosLogIn, IoIosLogOut } from "react-icons/io";
// import Popup from '../deals/Popup';

// import { logoutUser } from '../../actions/authActions';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: '',
      login:1
    };
  }

  onLogoutClick(e){
      e.preventDefault();
      this.props.logoutUser();
  }

  profile() {
    const { user } = this.props.auth;
    console.log('userLuis', user.id)
    this.props.history.push(`/profile/${user.id}`);
  }

   componentDidMount() {  
      
      if(!localStorage.jwtToken){
        this.setState({
          login:0
        });
      }else{
        this.setState({
          login:1
        });
      }
      
  }

  // togglePopup() {
    
  //   if(this.props.auth.isAuthenticated) {
  //     this.props.history.push('/addDeal');
  //   }
  //   else {
  //     this.setState({
  //       showPopup: !this.state.showPopup
  //     });
  //   }
  // }

   addInter(){
      window.location.href = "./add-post";
    }


    logout(){
      if(!localStorage.jwtToken){
        window.location.href = "./signup";
      }else{
        localStorage.clear();
        window.location.href = "./";
      }

    }
  
  render() {
    // const {isAuthenticated, user} = this.props.auth;
    // const nameArray = user.name.split(" ");
    // const name = nameArray[0];
    var button = [];
    if(!this.state.login){
      button.push(
        <div> Login 
        <IoIosLogIn/>
        </div>
        );
    }else{

      button.push(

      <div> Logout <IoIosLogOut/> </div>
      );
    }


    return (
        <div className="container">
        <div  className="row">
        <div className="col-md-4 yhh" >
          <img src={logo} alt="logo"/>
        </div>

        <div onClick={this.addInter}className="submitButton1 col-md-3" >
          Add Interest <IoIosAdd/>
        </div>

        <div onClick={this.logout} className="col-md-4 submitButton1" >
           {button}
        </div>

  
        </div>
        </div>
      
    );
  }
}

export default Navbar;
