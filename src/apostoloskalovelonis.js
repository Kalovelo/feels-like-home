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

    handleScroll = (e) => {
      const scr =parseInt(document.getElementById('cursor').style.top);
      const miniscr =parseInt(document.getElementById('minicursor').style.top);
      console.log( "scr = "+document.body.scrollTop+"\n scrollY  = "+window.pageYOffset)
      if(window.innerWidth >= 768){
        document.getElementById('cursor').style.top =(window.pageYOffset || document.scrollTop)  - (document.clientTop || 0)+scr/5+"px";
        document.getElementById('minicursor').style.top =(window.pageYOffset || document.scrollTop)  - (document.clientTop || 0)+miniscr/5+"px";
        console.log('neo style'+ document.getElementById('cursor').style.top);
      }
    }


    render(){

      let onMouseMoveH = (e) => {
        console.log(document.getElementById('cursor').style.top);
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
          <div id='App' className="App fade-in" onScroll={this.handleScroll} onMouseLeave={onMouseLeaveH} onMouseMove={onMouseMoveH}>
            {window.innerWidth <= 768 ? '' : <div><div id='cursor' />
            <div id='minicursor' /> </div>}

            <NavBar id='mynav' />
            <Cookiefier />
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route path='/Background' component={Background} />
              <Route path='/about' component={About} />
              <Route path='/thankYou' component={ThankYou} />
              <Route path='/portal' component={Portal} />
              <Route path='' component={NotFound404} />


            </Switch>
            <Footer />
          </div>

        </Router >

      );
    }
  }

  export default Apostoloskalovelonis;
