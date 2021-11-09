import React, {ChangeEvent} from 'react';
import s from './NewPost.module.css';
import {GeneralActionType} from '../../../../redux/store';

type NewPostPropsType = {
    value: string
    dispatch: (action: GeneralActionType) => void
}

export const NewPost: React.FC<NewPostPropsType> = ({value,dispatch}) => {

    const onClickHandler = () => {
        dispatch({type: 'ADD-POST'})
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({
            type:'UPDATE-NEW-POST-TEXT',
            newText:e.currentTarget.value
        })
    }

    return (
        <div className={s.body}>
            <textarea onChange={onChangeHandler} className={s.textarea} value={value}/>
            <div className={s.btn_wrapper}>
                <button onClick={onClickHandler} className={s.btn}>add post</button>
            </div>
        </div>
    )
}