import {NavLink} from 'react-router-dom';
import s from './DialogItem.module.css';
import React from 'react';
import {DialogType} from '../../../redux/store';


type DialogItemPropsType = {
    data: DialogType
}


export const DialogItem: React.FC<DialogItemPropsType> = ({data}) => {

    let path = `/dialogs/${data.id}`;

    return (
        <NavLink to={path} className={s.dialog} activeClassName={s.active}>
            <div className={s.avatar}>
                <img
                    src={data.avatar}
                    alt="avatar"/>
            </div>
            <p>{data.name}</p>
        </NavLink>
    )
}