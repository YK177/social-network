import React from 'react'
import s from './Dialogs.module.css'
import {NewMessage} from './NewMessage/NewMessage'
import {DialogItem} from './DialogItem/DialogItem'
import {DialogsPageType} from '../../redux/dialogs-reducer'
import {Message} from './Message/Message'

type DialogsPropsType = {
    data: DialogsPageType
    addMassage: () => void
    updateNewMessageText: (text: string) => void
}

export const Dialogs:React.FC<DialogsPropsType> = ({data,addMassage,updateNewMessageText}) => {
    return (
        <div className={s.container}>
            <div className={s.dialogsItems}>
                {data.dialogs.map(d => (
                    <DialogItem key={d.id} data={d}/>)
                )}
            </div>
            <div className={s.messageBlock}>
                <div className={s.massages}>
                    {data.messages.map(m => (
                        <Message key={m.id} data={m}/>)
                    )}
                </div>
                <NewMessage
                    value={data.newMessageText}
                    sendMessage={addMassage}
                    updateText={updateNewMessageText}
                />
            </div>
        </div>
    )
}