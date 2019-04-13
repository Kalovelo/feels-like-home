import React from 'react'; 
import './Parallax.css'

const ParallaxImage =() =>
{
    return(
        <div className="jumbotron paral paralsec" style={{overflow:"hidden"}}>
            <h1>Hello there.</h1><br/><h1 className="paralh1trans">Happy to see you here.</h1>
            
        </div>
    )
}

export default ParallaxImage