import React from "react";
import s from "./Message.module.css";

export type MessagePropsType = {
    id: number
    text: string
    kindOfMessage: string
}

export const Message = (props: MessagePropsType) => {

    let messageClass;
    (props.kindOfMessage === 'outgoing') ? (messageClass = s.outgoing) : (messageClass = s.incoming);

    return (
        <div className={`${s.massage} ${messageClass}`}>
            <p>{props.text}</p>
        </div>
    )
}