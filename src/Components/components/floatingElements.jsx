
import React from 'react';
import { withRouter } from 'react-router-dom';
const FloatingElements = (props)=> props.location.pathname!="/portal"
?<div>
    {
        [...Array(props.num)].map((index)=><span key={index} className="floatingElement"></span>)
    }
</div>
:''
export default withRouter(FloatingElements);
