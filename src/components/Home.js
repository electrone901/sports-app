import React, {Component} from 'react';
import userImg from './img/user1.jpg';
import userImg1 from './img/user2.jpg';
import userImg2 from './img/user3.jpg';
import messageImg from './img/message.png';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
 
class home extends Component{
    constructor() {
        super();
        this.state = {
            data: '', 
            pic: [
                "images/user1.jpg",
                "images/user2.jpg",
                "images/user3.jpg",
                "images/user4.jpg",
                "images/user5.jpg",
                "images/user6.jpg",
                "images/user8.jpg",
                "images/user9.jpg",
                "images/user10.jpg",
                "images/user11.jpg",
                "images/user12.jpg"
            ]
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);
        fetch("https://meetsportserver.herokuapp.com/feed")
        .then(response => response.json())
        .then(res => {
            this.setState({data: res.items})
            return console.log(res.items)
        })
        .catch((err) => {
            console.log('There was a problem with your fetch request' + err.message);
        });
    }
    render() {
        const { pic } = this.state;
        console.log("state", this.state.data)
        return (
            <div className="container text-center">
                <h1 className="home__header">Sport Feed</h1>
                {
                    this.state.data ? (
                        this.state.data.map((item, key) => {
                            var pic1 = pic[Math.floor(Math.random()*11)];
                            return (
                                <div className="container" key={key}>
                                    <div className="row boxUser">
                                        <div className="col-4">
                                            <div className="image-parent">
                                                <img src={pic1} className="thumbnail-user-profile" alt="Responsive"/> 
                                            </div>
                                        </div>
                                        <div className="col-8 feedPostDescription">
                                            <div className="">
                                                <p className="post-title">{item.userName} ({item.favoriteSport},  {item.level})</p>
                                                <p className="parrographPadding">{item.goal}</p>
                                                <div className="row">
                                                    <div className="col-9">
                                                        <p>{item.city} New York</p>
                                                    </div>
                                                    <div className="col-3">
                                                    <Link to="/send-message">
                                                        <img src={messageImg} className="messageImg" alt="Responsive"/>
                                                    </Link>
                                                        
                                                    </div>

                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                            </div>
                            )
                        })  
                    ):<p>Loading ...</p>
                }
            </div>
        );
    }
}

export default home;