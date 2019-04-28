import React, {Component} from 'react';
import userImg from './img/user1.jpg';
import userImg1 from './img/user2.jpg';
import userImg2 from './img/user3.jpg';
import messageImg from './img/message.png';
import 'font-awesome/css/font-awesome.min.css';

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
        this.state = {
            dataMessages: [], 
            descriptionMessage: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        console.log('e.target.value', e.target.value)
        this.setState({[e.target.name]: e.target.value});
    }


    componentDidMount() {
        window.scrollTo(0,0);
        let dataBaseData = []
        // retriving db
        const leadsRef =  app.database().ref('leads');
        leadsRef.once('value', function (snapshot)  {
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
        
          })
          console.log('dataBaseData',dataBaseData)

          this.setState({ dataMessages:dataBaseData});
          
          
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
        database.ref('leads/' +clientkey+'/name').set(this.state.descriptionMessage);
    }

    render() {
        const { dataMessages } = this.state;
        console.log("dataMessages",dataMessages )
        return (
            <div className="container text-center">
                <h1 className="home__header">SendMessage</h1>
                
                <div className="container">
                    <div className="row boxChat">
                        here is your chat
                        {
                            this.state.dataMessages ? (
                                this.state.dataMessages.map((item, key) => {
                                    return(
                                        <div key={key}>
                                            <p>{item.name} sdafasdf</p>

                                        </div>
                                    )
                                }) 
                            ): <p>""</p>
                        }
                    </div>
                </div>

                    <form onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="col-12 text-left">
                                <textarea 
                                    type="text" 
                                    id="descriptionMessage" 
                                    min="5" 
                                    className="form-control form-control-lg"
                                    name="descriptionMessage"
                                    value={this.state.descriptionMessage}
                                    onChange={this.onChange} 
                                    rows="2"
                                    >
                                </textarea>
                            </div>

                            <div className="col-12">
                                {/* <input type="submit" className="btn btn-primary btn-lg btn-block"/> */}
                                <input type="submit" className="btn btn-info btn-block mt-4" />

                            </div>

                        </div>
                    </form>

            </div>
        );
    }
}

export default SendMessage;