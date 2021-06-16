///import logo from './logo.svg';
import './App.css';
import Routings from './Components/Routings/Routings';

import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {  UpdateHoc } from './Components/Update/Update';
import {  DisplayHoc } from './Components/Display/Display';

function App() {
  return (<>
  
  <Router>
  <Routings/>
  <Switch>
    <Route exact path="/" render={ ()=> <h1 style={{marginTop:"40px",marginLeft:"280px"}}>Techwave  Task Assignment</h1>}/>
    <Route path="/posts-display" component={DisplayHoc}/>
    <Route path="/posts-update" component={UpdateHoc}/>
  </Switch>

  </Router>

  </>
  );
}

export default App;
