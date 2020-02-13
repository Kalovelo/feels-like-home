import React from 'react'
import {NavLink} from 'react-router-dom';

export const Button = (props) => {
    return     <NavLink to={props.link}>
    <span className={"button " + props.class}>
            {props.text}
    </span>
        </NavLink>
}