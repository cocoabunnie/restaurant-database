import React, { Component } from "react"
import ReactDOM from 'react-dom';
import axios from "axios";
import { Modal } from "@material-ui/core";
import { Dialog } from "@material-ui/core";
import { DialogTitle } from "@material-ui/core";
import { DialogActions } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";
import { DialogContentText } from "@material-ui/core";
import { Slide } from "@material-ui/core";

//Each Reservation will be displayed in one of these cards on the "See Reservations" Page
class ReservationCard extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            showDetails: false
        }
    }

    deleteReservation = () => {
        //Delete the item from the database and refresh the page!
        //Refreshing should repopulate the array with the updated data
        axios.delete('http://localhost:4000/reservations/' + this.props.reservation.id )
        .then(
            window.location.reload()
        )
    }

    render(){
        console.log(this.props.reservation.email);
        console.log(this.props.reservation.name);
        return (
            <div className="reservationCard">
                <div className="resCardFeature">
                    <div className="nameAndSchedule">
                        <h3 className = "cardName">Name: {this.props.reservation.name}</h3>
                        <p className = "cardDateandTime">Scheduled For: {this.props.reservation.date}, {this.props.reservation.time}</p>
                    </div>
                </div>
    
                <div className="resCardFeature">
                    <button className="editButton" onClick={() => this.setState({showDetails: true})}>See More</button>
                </div>
    
                <div className="resCardFeature">
                    <button className="deleteButton" onClick={this.deleteReservation}>Delete</button>
                </div>
                
                <Dialog open={this.state.showDetails}>
                    <DialogTitle id="alert-dialog-slide-title">{this.props.reservation.name}</DialogTitle>
                    
                    <DialogContent>
                        <DialogContentText>
                            <p>Date of Reservation: {this.props.reservation.date}</p>
                            <p>Time of Reservation: {this.props.reservation.time}</p>
                            <p>Number of People: {this.props.reservation.numberOfPeople}</p>
                            <p>Allergies: {this.props.reservation.allergies}</p>
                            <p>Email: {this.props.reservation.email}</p>
                            <p>Extra Notes: {this.props.reservation.notes}</p>
                        </DialogContentText>
                    </DialogContent>

                    <DialogActions>
                        <button onClick={() => this.setState({showDetails: false})}>Close</button>
                    </DialogActions>
                </Dialog>
            </div>
            
        )
    }
    
} export default ReservationCard;