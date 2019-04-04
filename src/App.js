import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/Navbars/NavBar';
import Homepage from './Components/Pages/Homepage/homePage'
import Footer from './Components/Pages/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Interests from './Components/Pages/Interests'
import Portal from './Components/Pages/portal'
import {BrowserRouter,Route} from 'react-router-dom'



class App extends Component {

  constructor()
  {
    super();
    this.state={
      portalActive:false
    }
  }

  activatePortal = () =>{
    this.setState(value=>({portalActive:value}));
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    console.log("ROUTE CHANGED");
  }
  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <NavBar/>
            <Route exact path='/' component={Homepage}/>
            <Route path='/portal' component={Portal}/>
            <Route path='/Background' component={Interests}/>
            <Footer/>

          </div>

      </BrowserRouter>
      
    );
  }
}

export default App;
