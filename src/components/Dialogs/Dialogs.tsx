import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../redux/state';

type DialogsPropsType = {
    data: DialogsPageType
}

export const Dialogs: React.FC<DialogsPropsType> = ({data}) => {

    const dialogsElements = data.dialogs.map(d => (
            <DialogItem
                key={d.id}
                data={d}
            />
        )
    )

    const messagesElements = data.messages.map(m => (
            <Message
                key={m.id}
                data={m}
            />
        )
    )

    return (
        <div className={s.container}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.massages}>
                {messagesElements}
            </div>
        </div>
    )
}