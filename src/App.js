import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/Navbars/NavBar';
import Homepage from './Components/Pages/Homepage/homePage'
import Footer from './Components/Pages/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Interests from './Components/Pages/Interests'
import Portal from './Components/Pages/portal'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

const NavType = ({match}) =>
{
  let nav = (match.params.id == 'portal') ? 'transNavbar' : 'solidNavbar'
};


class App extends Component {



  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <NavBar/>
            <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/Background' component={Interests}/>
            <Route path='/:portal' component={Portal}/>
            </Switch>
            <Footer/>

          </div>

      </BrowserRouter>
      
    );
  }
}

export default App;
