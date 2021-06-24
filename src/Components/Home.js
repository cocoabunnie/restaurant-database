import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
import ReservationCard from './Card';
import ReservationForm from './ReservationForm';
import foodImage from './foodImage.jpeg'
import home from './home.css';


class Homepage extends Component{
  constructor(props){
      super(props);
  }

  render(){
      //Display all students from database
        return(
            <div className = "homepage" >
                <div className = "welcomeBanner">
                <h1>Welcome To Floreo Labs  </h1>
                <p> open from 9am - 5pm everyday</p>
                </div>
                <div className = "parallax">
                    <Link to= "/new-reservation" className= "makeResButton"> Make a Reservation</Link>
                    {/* <button> Make a Reservation</button> */}
                    {/* <img src ={foodImage} />  */}
                </div>
                <div className = "menu"> 
                <h1 className = "menuHeader"> Menu </h1>
                <h2> Featured Favorites</h2>
                <p> Rice </p>
                <p> Beef Bipimbap </p>
                <p> Salad </p>
                <p> Pork Buns </p>
                <p> Edemame </p>
                <p> Bento</p>
                <p> Gyoza</p>

                <h2> Drinks </h2>
                <p> Lychee soda</p>
                <p> Coke</p>
                <p> oolong green iced tea</p>
                
                <h2> BBQ </h2>
                <p> Beef Bogogi</p>
                <p> Short rib steak</p>
                <p> Yaki Shabu</p>
                <p> Marinated boneless beef short ribs</p>
                </div>

                <h2> Users can create a reservations if the logic checks out.</h2>
            </div>
        );
    }
}
export default Homepage;