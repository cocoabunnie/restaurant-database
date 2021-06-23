import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
import ReservationCard from './Card';
import ReservationForm from './ReservationForm';
import { Modal } from '@material-ui/core';

class ReservationDetails extends Component{
  constructor(props){
      super(props);
  }

  render(){
      //Display all students from database
        return(
            <div className="resDetails">
                <Modal isOpen={true}>
                    <h1>TEST</h1>
                </Modal>
            </div>
        );
    }
}
export default ReservationDetails;