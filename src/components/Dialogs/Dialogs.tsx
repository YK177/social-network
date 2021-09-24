import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../index";

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.container}>
            <div className={s.dialogsItems}>
                {
                    props.dialogs.map(d => {
                        return (
                            <DialogItem key={d.id} id={d.id} avatar={d.avatar} name={d.name}/>
                        )
                    })
                }
            </div>
            <div className={s.massages}>
                {
                    props.messages.map(m => {
                        return (
                            <Message key={m.id} id={m.id} text={m.text} kindOfMessage={m.kindOfMessage}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

