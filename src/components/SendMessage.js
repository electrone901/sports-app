import React, {Component} from 'react';
import userImg from './img/user1.jpg'; 
import userImg1 from './img/user2.jpg';
import userImg2 from './img/user3.jpg';
import messageImg from './img/message.png';
import 'font-awesome/css/font-awesome.min.css';

import "./SendMessage.css";
import { IoIosArrowBack } from "react-icons/io";

class DataWrapper {
  constructor(data) {
    this._data = data;
  }

  getSize() {
    return this._data.length;
  }

 
}

// import db
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');


var app = firebase.initializeApp({
  apiKey: "AIzaSyBupWBBkn3pDwf73bDyI7RzDHRDfK9eKDc",
  authDomain: "sweatmeetchat.firebaseapp.com",
  databaseURL: "https://sweatmeetchat.firebaseio.com",
  projectId: "sweatmeetchat",
  storageBucket: "sweatmeetchat.appspot.com",
  messagingSenderId: "235875239474"
});
var database = app.database();



 
class SendMessage extends Component{
    constructor() {
        super();
        this.myRef = React.createRef() 
        this.state = {
            dataMessages: [{name: "FROM APPP!!!!!!!!!!"}], 
            descriptionMessage: ''
        }
        // this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.getMessages  = this.getMessages.bind(this);
    }

    // onChange(e){
    //     console.log('e.target.value', e.target.value)
    //     this.setState({[e.target.name]: e.target.value});
    // }



    getMessages(snapshot){
            var dataBaseData = [];
            snapshot.forEach( function(childSnapshot)  {
            var childData = childSnapshot.val();
            dataBaseData.push(childData)
            // console.log('snapshot',snapshot)
            
            // this.state.dataMessages.push(childData);

            // let childKey = childSnapshot.key;
            // let childData = childSnapshot.val();
    
            // console.log("childkey: ",childKey);
            // console.log("childData: ",childData)
            // let name = `${childKey}`
            // dataBaseData.push([name, childData,'hello',121]);
            // await this.setState({
            //   data: {
            //     [name]: childData
            //   },


    
    
            });
            this.setState({ dataMessages: dataBaseData});
            window.scrollBy(0, 10000000);
        
          }
    

    componentWillMount() {

        window.scrollTo(0,0);
        let dataBaseData = this.state.dataMessages;
        // retriving db
        const leadsRef =  app.database().ref('leads');
         leadsRef.on('value', this.getMessages);
          


          
          
          
        //   .then(async () => {
        //     console.log(dataBaseData)
        //       await this.setState({
        //         data: dataBaseData,
        //         })
        //   })



        // fetch("https://meetsportserver.herokuapp.com/feed")
        // .then(response => response.json())
        // .then(res => {
        //     this.setState({data: res.items})
        //     return console.log(res.items)
        // })
        // .catch((err) => {
        //     console.log('There was a problem with your fetch request' + err.message);
        // });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log('click', this.state)
        //posting to db
        const clientkey = database.ref().child('leads').push().key;

        var a = {};
        a.message = document.getElementById("messageForm").elements["descriptionMessage"].value;
        a.name = localStorage.name;
        a.userid = localStorage.userid;
            

        document.getElementById("messageForm").elements["descriptionMessage"].value = "";
        var postsRef = database.ref('leads');
        var newpostsRef =  postsRef.push();
        newpostsRef.set(a);
        window.scrollBy(0, 100000);
    }


    returnHome(){

        window.location.href = "./";
    }

    render() {

        if(!localStorage.name){
            window.location.href = "./signup";
        }
        const { dataMessages } = this.state;
        console.log("dataMessages",dataMessages )
        var messages = [];
        dataMessages.forEach(function(eachdatamessage){
            console.log(eachdatamessage.name);
            if(eachdatamessage.name==localStorage.name){
                messages.push(
                <div className="row rightMessage">
                        <b>You:</b><br/>
                        {eachdatamessage.message}
                </div>
            )
            }else{
                messages.push(
                <div className="row leftMessage">
                        <b>{eachdatamessage.name}:</b><br/>
                        {eachdatamessage.message}
                </div>
            )

            }
            

        });

        
        return (
            <div>
            <div className = "ReturnHome">      
                  <IoIosArrowBack onClick={this.returnHome}/>
            </div>   

            <div className=" MessageArea">

                
                <div className="container messages ">
                    {messages}
                </div>
                    <div className="messagetext" >
                    <form ref={this.myRef} onSubmit={this.onSubmit} id="messageForm">
                        <div className="row">
                            <div className="col-12 text-left">
                                <textarea 
                                    type="text" 
                                    id="descriptionMessage" 
                                    min="5" 
                                    className="form-control form-control-lg"
                                    name="descriptionMessage"
                                    
                                    rows="2"
                                    >
                                </textarea>
                            </div>

                            <div className="col-12">
                                {/* <input type="submit" className="btn btn-primary btn-lg btn-block"/> */}
                                <input type="submit" className="btn btn-info btn-block mt-4 messafe" />

                            </div>

                        </div>
                    </form>
                    </div>

            </div>
            </div>
        );
    }
    scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)   

}

export default SendMessage;