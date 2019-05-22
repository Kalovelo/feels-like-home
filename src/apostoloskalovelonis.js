import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/Navbars/NavBar';
import Homepage from './Components/Pages/Homepage/homePage';
import Footer from './Components/Pages/Footer';
import Background from './Components/Pages/background';
import Portal from './Components/Pages/portal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './Components/Pages/about';
import './animations/animations.css';
import Cookiefier from './Components/cookiefier';
import ThankYou from './Components/Pages/thankYou';
import NotFound404 from './Components/Pages/notFound404';
import './fonts/font.css'



class Apostoloskalovelonis extends Component {

  componentDidMount() {
    if(window.innerWidth >= 768){
      document.getElementById('cursor').setAttribute("style", "opacity:0");
      document.getElementById('minicursor').setAttribute("style", "opacity:0");

    }

   
    }


    render(){

      let onMouseMoveH = (e) => {

        if(window.innerWidth >= 768){
        document.getElementById('cursor').setAttribute("style", "top: " + (e.pageY - 10) + "px;left:" + (e.pageX - 10) + "px;");
        document.getElementById('minicursor').setAttribute("style", "top: " + (e.pageY - 50) + "px;left:" + (e.pageX - 20) + "px;");        
        }    
      }

      let onMouseLeaveH = (e) => {
        if(window.innerWidth >= 768){
        document.getElementById('cursor').setAttribute("style", "top: " + (e.pageY - 10) + "px;left:" + (e.pageX - 10) + "px;opacity:0;position:absolute;");
        document.getElementById('minicursor').setAttribute("style", "top: " + (e.pageY - 20) + "px;left:" + (e.pageX - 20) + "px;opacity:0;position:absolute");
        }
      }

    

     


      return (
        <Router>
          <div id='App' className="App fade-in" onMouseLeave={onMouseLeaveH} onMouseMove={onMouseMoveH}>
            {window.innerWidth <= 768 ? '' : <div><div id='cursor' />
            <div id='minicursor' /> </div>}
            {this.position}
            <NavBar id='mynav' />
            <Cookiefier />
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route path='/Background' component={Background} />
              <Route path='/about' component={About} />
              <Route path='/thankYou' component={ThankYou} />
              <Route path='/portal'component={Portal} />
              <Route path='' component={NotFound404} />


            </Switch>
            <Footer />
          </div>

        </Router >

      );
    }
  }

  export default Apostoloskalovelonis;
