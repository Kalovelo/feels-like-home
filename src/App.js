import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/Navbars/NavBar';
import Homepage from './Components/Pages/homePage'
import Footer from './Components/Pages/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Homepage/>
        <Footer/>

      </div>
      
    );
  }
}

export default App;
