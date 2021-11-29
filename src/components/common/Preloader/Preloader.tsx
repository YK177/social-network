import React from 'react'
import spinner from '../../../assets/images/spinner.svg'
import s from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div className={s.preloader}>
            <img src={spinner} alt="loading"/>
        </div>
    )
}