import s from './NewMessage.module.css';
import React, {ChangeEvent} from 'react';

type NewMessagePropsType = {
    value: string
    sendMessage: () => void
    updateText: (text: string) => void
}

export const NewMessage: React.FC<NewMessagePropsType> = ({value, sendMessage, updateText}) => {

    const onClickHandler = () => sendMessage()

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateText(e.currentTarget.value)
    }

    return (
        <div className={s.body}>
            <textarea
                className={s.textarea}
                placeholder={'Say something...'}
                onChange={onChangeHandler}
                value={value}/>
            <div className={s.btn_wrapper}>
                <button onClick={onClickHandler} className={s.btn}>send</button>
            </div>
        </div>
    )
}