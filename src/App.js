import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/Navbars/NavBar';
import Homepage from './Components/Pages/Homepage/homePage'
import Footer from './Components/Pages/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Interests from './Components/Pages/Interests'
import Portal from './Components/Pages/portal'
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Portal/>
        <Footer/>

      </div>
      
    );
  }
}

export default App;
