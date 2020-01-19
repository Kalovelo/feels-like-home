import React from 'react'
import {NavLink} from 'react-router-dom';

const Button = (props) => {
    return     <NavLink to={props.link}>
    <div className={"button " + props.class}>
            {props.text}
    </div>
        </NavLink>
}

export default Button