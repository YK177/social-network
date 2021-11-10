import React, {ChangeEvent} from 'react';
import s from './NewPost.module.css';
import { addPostAC, updateNewPostTextAC } from '../../../../redux/profile-reducer';
import { ActionType } from '../../../../redux/redux-store';

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