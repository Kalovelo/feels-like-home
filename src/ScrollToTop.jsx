import  {  useEffect } from 'react';
import {withRouter } from 'react-router-dom'


const ScrollToTop = ({ children, location: { pathname } }) => {
    useEffect(() => {

      setTimeout(()=>window.scrollTo(0, 0),50)
    }, [pathname]);
  
    return children || null;
  };
  
  export default withRouter(ScrollToTop);
