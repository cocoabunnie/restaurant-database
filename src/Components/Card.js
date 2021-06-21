import React, { Component } from "react"
import ReactDOM from 'react-dom';

//Each Campus displayed on the All Campus page are displayed using one of these CampusCard components
function ReservationCard(props){
    return (
        <div className="reservationCard">
            <div className="reservationName">
                <h3>Name: {props.reservation.name}</h3>
            </div>

            <div className="reservationDate">
                <p>Scheduled For: {props.reservation.date} + ", " + {props.reservation.time}</p>
            </div>

            <div className="reservationTime">
                <p>Students Enrolled: {props.reservation.time}</p>
            </div>

            <button>Delete</button>
        </div>
        
    )
} export default ReservationCard;