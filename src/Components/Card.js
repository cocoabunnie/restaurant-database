import React, { Component } from "react"
import ReactDOM from 'react-dom';

//Each Reservation will be displayed in one of these cards on the "See Reservations" Page
function ReservationCard(props){
    return (
        <div className="reservationCard">
            <div className="reservationName">
                <h3>Name: {props.reservation.name}</h3>
            </div>

            <div className="reservationInfo">
                <p>Scheduled For: {props.reservation.date}, {props.reservation.time}</p>
            </div>

            <button>Delete</button>
        </div>
        
    )
} export default ReservationCard;