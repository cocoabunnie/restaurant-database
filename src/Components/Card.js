import React, { Component } from "react"
import ReactDOM from 'react-dom';
import axios from "axios";

//Each Reservation will be displayed in one of these cards on the "See Reservations" Page
class ReservationCard extends React.Component{
    constructor(props){
        super(props);
    }

    deleteReservation = () => {
        const reservationObject = {
            name: this.props.reservation.name,
            numberOfPeople: this.props.reservation.numberOfPeople,
            date: this.props.reservation.date,
            time: this.props.reservation.time,
            allergies: this.props.reservation.allergies,
            notes: this.props.reservation.notes,
            email: this.props.reservation.email
        }

        console.log(reservationObject)

        //Delete the item from the database and refresh the page!
        //Refreshing should repopulate the array with the updated data
        axios.delete('http://localhost:4000/reservations/' + this.props.reservation.id )
        .then(
            window.location.reload()
        )
    }

    render(){
        return (
            <div className="reservationCard">
                <div className="resCardFeature">
                    <div className="nameAndSchedule">
                        <h3 className = "cardName">Name: {this.props.reservation.name}</h3>
                        <p className = "cardDateandTime">Scheduled For: {this.props.reservation.date}, {this.props.reservation.time}</p>
                    </div>
                </div>
    
                <div className="resCardFeature">
                    <button className="editButton">See More</button>
                </div>
    
                <div className="resCardFeature">
                    <button className="deleteButton" onClick={this.deleteReservation}>Delete</button>
                </div>
            </div>
            
        )
    }
    
} export default ReservationCard;