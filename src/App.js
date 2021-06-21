import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';

//importing components
import ReservationForm from './Components/ReservationForm';
import AllReservations from './Components/SeeAllReservations';
import Homepage from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/all-reservations">Reservations</Link>

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route path="/all-reservations">
            <AllReservations />
          </Route>

          <Route path="/new-reservation">
            <ReservationForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
