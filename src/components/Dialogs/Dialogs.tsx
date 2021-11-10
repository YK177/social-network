import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {NewMessage} from './NewMessage/NewMessage';
import {DialogsPageType} from '../../redux/dialogs-reducer';
import { ActionType } from '../../redux/redux-store';

type DialogsPropsType = {
    data: DialogsPageType
    dispatch:(action:ActionType)=>void
}

export const Dialogs: React.FC<DialogsPropsType> = ({data,dispatch}) => {

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
            <div className={s.messageBlock}>
                <div className={s.massages}>
                    {messagesElements}

                </div>
                <NewMessage value={data.newMessageText} dispatch={dispatch}/>
            </div>
        </div>
    )
}