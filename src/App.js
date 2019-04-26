  import React, { Component } from 'react';
  import './App.css';
  import NavBar from './Components/Navbars/NavBar';
  import Homepage from './Components/Pages/Homepage/homePage';
  import Footer from './Components/Pages/Footer';
  import Background from './Components/Pages/background';
  import Portal from './Components/Pages/portal';
  import {Router,Route,Switch} from 'react-router-dom'
  import About from './Components/Pages/about'
  import { createBrowserHistory } from 'history';
  import './animations/animations.css'
  import Cookiefier from './Components/cookiefier'


const browserHistory = createBrowserHistory();


class App extends Component {


 

  render() {
    return (
      
      <Router history={browserHistory}>
     
          <div className="App fade-in">
            <NavBar id='mynav'/>
            <Cookiefier/>
            <Switch>
              <Route exact path='/' component={Homepage}/>
              <Route path='/Background' component={Background}/>
              <Route path='/about' component={About}/>
              <Route path='/:portal' component={Portal}/>
            </Switch>
            <Footer/>

          </div>
         
      </Router>
      
    );
  }
}

export default App;
