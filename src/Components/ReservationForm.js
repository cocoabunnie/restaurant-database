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
        this.setState({
            date: event.target.value
        });
    }

    //Uses time in form to update time state
    updateTime = (event) =>{
        event.preventDefault();
        this.setState({
            time: event.target.value
        });
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

    //Called when the user submits the form (with button)
    onSubmit = () =>{  
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
    }
    
    //Send info to database
    addReservation = async(newReservation) => {
       axios.post('http://localhost:3000/APIHERE', newReservation)
       .then((response) => console.log(response.data))
       .catch((error) => console.log(error))

       //Reset values 
       {this.setState({
            name: '',
            numberOfPeople:'',
            date:'',
            time:'',
            allergies:'',
            notes:''
       })}
    }
    
    render(){
        return (
            <div>
                <form onSubmit = {this.onSubmit}>
                    <p>New Reservation</p>

                    <input type="text" onChange = {this.updateName} placeholder = "Name" required/>
                    <br/>

                    <input type="text" onChange = {this.updateNumPeople} placeholder = "Number of People Attending" required/>
                    <br/>

                    <input type="text" onChange = {this.updateDate} placeholder = "Date" required/>
                    <br/>

                    <input type="text" onChange = {this.updateTime} placeholder = "Time" required/>
                    <br/>

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