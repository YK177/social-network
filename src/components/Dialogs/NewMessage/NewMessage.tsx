import s from './NewMessage.module.css';
import React from 'react';

export const NewMessage = () => {

    const newMassageElement = React.createRef<HTMLTextAreaElement>()

    const onClickHandler = () => {
        alert(newMassageElement.current?.value)
    }

    return (
        <div className={s.body}>
            <textarea className={s.textarea} placeholder={'Say something'} ref={newMassageElement}/>
            <div className={s.btn_wrapper}>
                <button onClick={onClickHandler} className={s.btn}>send</button>
            </div>
        </div>
    )
}