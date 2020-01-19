import React, { Component } from 'react';
import './App.css';
import './styles/styles.scss'
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
import ScrollToTop from './ScrollToTop'
class Apostoloskalovelonis extends Component {

    render(){
      return (
        <Router >
          <div id='App' className="App fade-in">
          <ScrollToTop />
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
