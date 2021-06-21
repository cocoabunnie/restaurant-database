import React, { Component } from "react"
import ReactDOM from 'react-dom';

//Each Reservation will be displayed in one of these cards on the "See Reservations" Page
function ReservationCard(props){
    return (
        <div className="reservationCard">
            <div className="resCardFeature">
                <div className="nameAndSchedule">
                    <h3 className="cardName">Name: {props.reservation.name}</h3>
                    <p>Scheduled For: {props.reservation.date}, {props.reservation.time}</p>
                </div>
            </div>

            <div className="resCardFeature">
                <button className="deleteButton">Delete</button>
            </div>
        </div>
        
    )
} export default ReservationCard;