import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.css";
import React from "react";

export type DialogPropsType = {
    id: number
    avatar: string
    name: string
}

export const DialogItem = (props: DialogPropsType) => {

    let path = `/dialogs/${props.id}`;

    return (
        <NavLink to={path} className={s.dialog} activeClassName={s.active}>
            <div className={s.avatar}>
                <img
                    src={props.avatar}
                    alt="avatar"/>
            </div>
            <p>{props.name}</p>
        </NavLink>
    )
}