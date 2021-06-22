import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
import ReservationCard from './Card';
import ReservationForm from './ReservationForm';

class ReservationDetails extends Component{
  constructor(props){
      super(props);
  }

  render(){
      //Display all students from database
        return(
            <div>
                <h1>Welcome To The Homepage</h1>
            </div>
        );
    }
}
export default ReservationDetails;