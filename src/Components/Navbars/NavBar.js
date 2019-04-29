import React from 'react';
import NavBarDesktop from './Desktop/deskNavBar';
import SideBar from './mobileNavMenu/sidebar'

class NavBar extends React.Component{
    
    state=
    {
        nav:NavBarDesktop
    }



    componentDidMount = () =>
        {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
        }

resize=()=> 
{
  let currentHideNav = (window.innerWidth <= 760);
    if (currentHideNav ) {
        this.setState({nav: SideBar});
    }
    else this.setState({nav: NavBarDesktop});
}

render() {
    return (
        <this.state.nav />
    )
}



}

export default NavBar

