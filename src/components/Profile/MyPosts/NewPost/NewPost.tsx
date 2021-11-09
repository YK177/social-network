import React, {ChangeEvent} from 'react';
import s from './NewPost.module.css';
import {addPostAC, ActionType, updateNewPostTextAC} from '../../../../redux/store';

type NewPostPropsType = {
    value: string
    dispatch: (action: ActionType) => void
}

export const NewPost: React.FC<NewPostPropsType> = ({value, dispatch}) => {

    const onClickHandler = () => {
        dispatch(addPostAC())
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewPostTextAC(e.currentTarget.value))
    }

    return (
        <div className={s.body}>
            <textarea onChange={onChangeHandler} className={s.textarea} placeholder={'Say something...'} value={value}/>
            <div className={s.btn_wrapper}>
                <button onClick={onClickHandler} className={s.btn}>add post</button>
            </div>
        </div>
    )
}