import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import ReservationCard from './Card';

class AllReservations extends Component{
  constructor(props){
      super(props);
      
      this.state = {
        reservationData: [],
        prompt:""
      }
  }

    componentDidMount(){
        this.getReservationData();
    }

    //get data from database
    getReservationData = () => {
        axios.get('http://localhost:4000/reservations')
        .then((response) => {
            this.setState({
                reservationData: response.data.reservations
            })

            if (response.data.reservations.length == 0){
                this.setState({
                    prompt: "You have no reservations scheduled..."
                });
            } else {
                this.setState({
                    prompt: ""
                });
            }
        })
        .catch((error) => console.log(error));
    }

  render(){
      const displayReservations = this.state.reservationData.map(data => <ReservationCard reservation={data}/>)
      console.log(this.state.reservationData.length);
        return(
            <div className="allReservationPage">
                <h1>Reservations</h1>
                <p className="noReservationsMessage">{this.state.prompt}</p>
                {displayReservations}
                <Link className="newReservationButton" to="/new-reservation">+</Link>
            </div>
        );
    }
}
export default AllReservations;