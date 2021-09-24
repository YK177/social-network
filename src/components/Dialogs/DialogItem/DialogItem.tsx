import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.css";
import React from "react";
import {DialogType} from "../../../index";

export const DialogItem = (props: DialogType) => {

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