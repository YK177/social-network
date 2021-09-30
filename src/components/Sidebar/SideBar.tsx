import React from 'react';
import s from './SideBar.module.css';
import {NavBar} from './NavBar/NavBar';
import {Friends} from './Friends/Friends';
import {SideBarType} from '../../redux/state';

type SideBarPropsType = {
    data: SideBarType
}

export const SideBar:React.FC<SideBarPropsType> = ({data}) => {
    return (
        <div className={s.body}>
            <NavBar/>
            <Friends friendsList={data.friends}/>
        </div>
    )
}

