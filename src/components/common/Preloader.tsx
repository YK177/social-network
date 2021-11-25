import React from 'react'
import spinner from '../../assets/images/spinner.svg'

export const Preloader = () => {
    return (
        <div className={'preloader'}>
            <img src={spinner} alt="loading"/>
        </div>
    )
}