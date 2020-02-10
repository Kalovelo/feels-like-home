import React, { Component } from 'react';

//! styles
import './App.css';
import './fonts/font.css'
import './styles/styles.scss'
import './animations/animations.css';
import 'react-image-lightbox/style.css'

//! layout
import Footer from './Components/Pages/Footer';
import Header from './Components/header/header';

//! pages
import Homepage from './Components/Pages/Homepage/homePage';
import Background from './Components/Pages/background';
import Portal from './Components/Pages/portal';
import About from './Components/Pages/about';
import ThankYou from './Components/Pages/thankYou';
import NotFound404 from './Components/Pages/notFound404';
import Cookiefier from './Components/cookiefier';

//!store
import { Provider } from 'react-redux';
import store from './store'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

class App extends Component {
    render(){
      return (
        <Provider store={store}>
        <Router >
          <div id='App' className="App fade-in">
          <ScrollToTop />
            <Header id='mynav' />
            <Cookiefier />
            {[...Array(3)].map((index)=><span key={index} className="floatingElement floatingElement--darkMode"></span>)}

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
        </Provider>
      );
    }
  }

  export default App;
