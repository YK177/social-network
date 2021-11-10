import React, {ChangeEvent} from 'react';
import s from './NewPost.module.css';

type NewPostPropsType = {
    value: string
    addPost: () => void
    updateText: (text: string) => void
}

export const NewPost: React.FC<NewPostPropsType> = ({value, addPost, updateText}) => {

    const onClickHandler = () => addPost()

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateText(e.currentTarget.value)
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