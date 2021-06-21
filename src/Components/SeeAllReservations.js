import React, {Component} from 'react';
//import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
import ReservationCard from './Card';
import ReservationForm from './ReservationForm';

class AllReservations extends Component{
  constructor(props){
      super(props);
      
      this.state = {
        //This is just filler for me to see the card work
        reservationData: [{
            name: 'Alex',
            numberOfPeople:'3',
            date:'Dec, 13, 2021',
            time:'2:45am',
            allergies:'Nope :)',
            notes:'This is a test!'}],
        prompt:""
      }
  }

    componentDidMount(){
        if (this.state.reservationData.length == 0){
            this.setState({
                prompt: "No reservations scheduled"
            });
        } else {
            this.setState({
                prompt: ""
            });
        }
    }

    /*
    getStudentData = () => {
        //NOTE - I don't know what the URL is for the database to this is here as filler... UPDATE LATER!
        axios.get('http://localhost:3000/STUDENTDATAURLGOESHERE')
        .then((response) => {
            this.setState({
                studentData: response
            })
        })
        .catch((error) => console.log(error));

        console.log("Students from Database: \n" + this.state.studentData)
    }
    */

  render(){
      //Display all students from database
        return(
            <div>
                <h1>Reservations</h1>
                <p>{this.state.prompt}</p>
                <ReservationCard reservation = {this.state.reservationData}/>
            </div>
        );
    }
}
export default AllReservations;