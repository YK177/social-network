import React, {ChangeEvent} from 'react';
import s from './NewPost.module.css';

type NewPostPropsType = {
    value: string
    addPost: () => void
    changeTextForNewPost: (newText: string) => void
}

export const NewPost: React.FC<NewPostPropsType> = ({addPost, value, changeTextForNewPost}) => {

    const onClickHandler = () => {
        addPost()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeTextForNewPost(e.currentTarget.value)
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