import s from './NewMessage.module.css';
import React, {ChangeEvent} from 'react';
import { addMassageAC, updateNewMessageTextAC } from '../../../redux/dialogs-reducer';
import {ActionType} from '../../../redux/redux-store';

type NewMessagePropsType = {
    value: string
    dispatch: (action: ActionType) => void
}

export const NewMessage: React.FC<NewMessagePropsType> = ({value, dispatch}) => {

    const onClickHandler = () => {
        dispatch(addMassageAC())
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageTextAC(e.currentTarget.value))
    }

    return (
        <div className={s.body}>
            <textarea className={s.textarea} placeholder={'Say something...'} onChange={onChangeHandler} value={value}/>
            <div className={s.btn_wrapper}>
                <button onClick={onClickHandler} className={s.btn}>send</button>
            </div>
        </div>
    )
}