import {Route, Switch, Link, BrowserRouter} from 'react-router-dom';
import './App.css';
import PageRender from './Components/Homepage';
import AllCampus from './Components/AllCampus';
import Homepage from './Components/Homepage';
import SingleCampus from './Components/SingleCampus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/all-campus">All Campuses</Link>
        <Link to="/single-campus">Single Campus</Link>

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route path="/all-campus">
            <AllCampus />
          </Route>

          <Route path="/single-campus">
            <SingleCampus />
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
