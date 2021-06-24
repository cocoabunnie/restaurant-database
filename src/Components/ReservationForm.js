import React, { Component } from "react"
import ReactDOM from 'react-dom';
import emailjs from 'emailjs-com';
const axios = require('axios');



class ReservationForm extends Component{
    state = {
        name: '',
        numberOfPeople:'',
        date:'',
        time:'',
        allergies:'',
        notes:'',
        email: ''
    }

    updateName = (event) =>{
        event.preventDefault();
        this.setState({
            name: event.target.value
        });
    }
    
    updateNumPeople = (event) =>{
        event.preventDefault();
        this.setState({
            numberOfPeople: event.target.value
        });
    }

    updateDate = (event) =>{
        event.preventDefault();
        let month = document.getElementById("monthInput").value;
        let day = document.getElementById("dayInput").value;
        let dateInput = month + ", " + day;

        this.setState({
            date: dateInput
        })
    }

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

    updateAllergies = (event) =>{
        event.preventDefault();
        this.setState({
            allergies: event.target.value
        });
    }

    updateNotes = (event) =>{
        event.preventDefault();
        this.setState({
            notes: event.target.value
        });
    }

    updateEmail = (event) =>{
        event.preventDefault();
        this.setState({
            email: event.target.value
        });
    }

    //Send info to database
    addReservation = async(newReservation) => {
        axios.post('http://localhost:4000/reservations', newReservation)
        .then((response) => {
            console.log(response);
            window.location.replace("/all-reservations");
        })
        .catch((error) => console.log(error))

        //Reset values to prepare for another input
        {this.setState({
             name: '',
             numberOfPeople:'',
             date:'',
             time:'',
             allergies:'',
             notes:'',
             email: ''
        })}
     }

    onSubmit = (event) =>{  
        event.preventDefault();
        //Creates new reservation with the information given to be sent to database
        const newReservation = {
            name: this.state.name,
            numberOfPeople: this.state.numberOfPeople,
            date: this.state.date,
            time: this.state.time,
            allergies: this.state.allergies,
            notes: this.state.notes,
            email: this.state.email
        }

        //Add to database
       this.addReservation(newReservation);
       console.log(newReservation);
       
       alert("you have made a reservation");   //  

       emailjs.sendForm('service_0nb6yg5', 'template_04ev38q', event.target, 
       'user_d1OJ5CU5VisX06Be5rNjQ')
         .then((result) => {
             console.log(result.text);
         }, (error) => {
             console.log(error.text);
         });
    }
    
    render(){
        return (
            <div className="reservationForm">
                
                <h1 className="reservationTitle">Make A Reservation</h1>
                <p>
                    Thank you for choosing to reserve a table at Miss Korea! We promise to make you feel welcome and at home :)
                    Please fill out the information below, and we'll reserve a spot for you at one of our tables!
                </p>

                <form onSubmit = {this.onSubmit}>
                    <input type="text" onChange = {this.updateName} placeholder = "Name" name ="to_name" required/>
                    <br/>

                    <input type="email" onChange = {this.updateEmail} placeholder = "Your Email" name ="user_email" required/>
                    <br/>

                    <input type="text" onChange = {this.updateNumPeople} placeholder = "Number of People Attending" name = "party_number" required/>
                    <br/>

                    <div className="dateSelector">
                        <div className="dateTool">
                            <select onChange={this.updateDate} id="monthInput" name = "month" required>
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
                            <select onChange={this.updateDate} id="dayInput" name = "day" required>
                                <option value="">Day</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>

                            </select>
                        </div>
                    </div>

                    <div className="timeSelecter">
                        <div className="timeTool">
                            <select onChange={this.updateTime} id="hourInput" name = "hour" required>
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
                            <select onChange={this.updateTime} id="minuteInput" name = "minute" required>
                                <option value="">MM</option>
                                <option value="00">00</option>
                                <option value="15">15</option>
                                <option value="30">30</option>
                                <option value="45">45</option>
                            </select>
                        </div>
                        <div onChange={this.updateTime} className="timeTool" required>
                            <select id="ampmInput" name = "ampm">
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