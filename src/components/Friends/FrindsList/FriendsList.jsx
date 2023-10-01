import React from "react";
import c from './FrinedsList.module.css'
import {NavLink} from "react-router-dom";

const FriendsList = (props) => {
    return (
        <div>
            <div className={c.friends_list}>
                <div className={c.image}>
                    <img src={props.image} alt="error"/>
                </div>
                <div className={c.name_profile}>
                    {props.name}
                </div>
                <div className={c.info_profile}>
                    {props.status}
                </div>
                <NavLink to='/' className={c.butt_profile}>
                    Написать сообщение
                </NavLink>
            </div>
            <div className={c.line}></div>
        </div>
    )
}

export default FriendsList;