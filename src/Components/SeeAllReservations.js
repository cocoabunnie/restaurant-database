import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
import ReservationCard from './Card';
import ReservationForm from './ReservationForm';

class AllReservations extends Component{
  constructor(props){
      super(props);
      
      this.state = {
        //This is just filler for me to see the card work
        reservationData: [],
        prompt:""
      }
  }

    componentDidMount(){
        //Get reservations from database when page loads
        this.getReservationData()

        if (this.state.reservationData.length == 0){
            this.setState({
                prompt: "You have no reservations scheduled..."
            });
        } else {
            this.setState({
                prompt: ""
            });
        }
    }

    getReservationData = () => {
        axios.get('http://localhost:4000/reservations')
        .then((response) => {
            this.setState({
                reservationData: response
            })
        })
        .catch((error) => console.log(error));

        console.log("Your reservations: \n" + this.state.studentData)
    }

  render(){
      //Display reservations
      const displayReservations = this.state.reservationData.map(data => <ReservationCard reservation={data}/>)
      console.log(this.state.reservationData.length);
        return(
            <div className="allReservationPage">
                <h1>Reservations</h1>
                <p className="noReservationsMessage">{this.state.prompt}</p>
                {displayReservations}

                <Link to="/new-reservation" class="newReservationButton">+</Link>
            </div>
        );
    }
}
export default AllReservations;