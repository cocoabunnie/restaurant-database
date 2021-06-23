import React, { Component } from "react"
import ReactDOM from 'react-dom';
const axios = require('axios');

class ReservationForm extends Component{
    state = {
        name: '',
        numberOfPeople:'',
        date:'',
        time:'',
        allergies:'',
        notes:''
    }

    //Uses name in the form to update name state
    updateName = (event) =>{
        event.preventDefault();
        this.setState({
            name: event.target.value
        });
    }
    
    //Uses number of people input in form to update num people state
    updateNumPeople = (event) =>{
        event.preventDefault();
        this.setState({
            numberOfPeople: event.target.value
        });
    }

    //Uses date in form to update date state
    updateDate = (event) =>{
        event.preventDefault();
        let month = document.getElementById("monthInput").value;
        let day = document.getElementById("dayInput").value;
        let dateInput = month + ", " + day;

        this.setState({
            date: dateInput
        })
    }

    //Uses time in form to update time state
    updateTime = (event) =>{
        event.preventDefault();
        let hour = document.getElementById("hourInput").value;
        let minute = document.getElementById("minuteInput").value;
        let ampm = document.getElementById("ampmInput").value
        let timeInput = hour + ":" + minute + ampm;

        this.setState({
            time: timeInput
        })
    }

    //Uses allergies in form to update allergies state
    updateAllergies = (event) =>{
        event.preventDefault();
        this.setState({
            allergies: event.target.value
        });
    }

    //Uses notes in form to update notes state
    updateNotes = (event) =>{
        event.preventDefault();
        this.setState({
            notes: event.target.value
        });
    }

    //Send info to database function
    addReservation = async(newReservation) => {

        //console.log("asdasdasd something goin on here asdasd")

        axios.post('http://localhost:4000/reservations', newReservation)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error))
 
        //Reset values to prepare for another input
        {this.setState({
             name: '',
             numberOfPeople:'',
             date:'',
             time:'',
             allergies:'',
             notes:''
        })}
     }

    //Called when the user submits the form (with button)
    onSubmit = (event) =>{  
        event.preventDefault();
        //Creates new reservation with the information given to be sent to database
        const newReservation = {
            name: this.state.name,
            numberOfPeople: this.state.numberOfPeople,
            date: this.state.date,
            time: this.state.time,
            allergies: this.state.allergies,
            notes: this.state.notes
        }

       this.addReservation(newReservation);
       console.log(newReservation)
    }
    

    render(){
        return (
            <div className="reservationForm">
                <h1 className="reservationTitle">Make A Reservation</h1>
                <p>
                    Thank you for choosing to reserve a table at our restaurant! We promise to make you feel welcome and at home :)
                    Please fill out the information below, and we'll reserve a spot for you at one of our tables!
                </p>

                <form onSubmit = {this.onSubmit}>
                    <input type="text" onChange = {this.updateName} placeholder = "Name" required/>
                    <br/>

                    <input type="text" onChange = {this.updateNumPeople} placeholder = "Number of People Attending" required/>
                    <br/>

                    <div className="dateSelector">
                        <div className="dateTool">
                            <select onChange={this.updateDate} id="monthInput" required>
                                <option value="">Month</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                        </div>
                        <div className="dateTool">
                            <select onChange={this.updateDate} id="dayInput" required>
                                <option value="">Day</option>
                                <option value="05">05</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                                <option value="25">25</option>
                            </select>
                        </div>
                    </div>

                    <div className="timeSelecter">
                        <div className="timeTool">
                            <select onChange={this.updateTime} id="hourInput" required>
                                <option value="">HH</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                        <div className="timeTool">
                            <p>:</p>
                        </div>
                        <div className="timeTool">
                            <select onChange={this.updateTime} id="minuteInput" required>
                                <option value="">MM</option>
                                <option value="00">00</option>
                                <option value="15">15</option>
                                <option value="30">30</option>
                                <option value="45">45</option>
                            </select>
                        </div>
                        <div onChange={this.updateTime} className="timeTool" required>
                            <select id="ampmInput">
                                <option value="am">am</option>
                                <option value="pm">pm</option>
                            </select>
                        </div>
                    </div>

                    <input type="text" onChange = {this.updateAllergies} placeholder = "Any Allergies?" required/>
                    <br/>

                    <input type="text" onChange = {this.updateNotes} placeholder = "Anything else we should know? (Write N/A if not)" required/>
                    <br/>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
    
} export default ReservationForm;