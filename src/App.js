import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/Navbars/NavBar';
import Homepage from './Components/Pages/Homepage/homePage';
import Footer from './Components/Pages/Footer';
import Interests from './Components/Pages/Interests';
import Portal from './Components/Pages/portal';
import {BrowserRouter,Route,Switch} from 'react-router-dom'

class App extends Component {


  render() {
    return (
      <BrowserRouter>
          <div className="App fade-in">
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
