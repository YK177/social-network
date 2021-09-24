import React from "react";
import {MessageType} from "../../..";
import s from "./Message.module.css";

export const Message = (props: MessageType) => {

    let messageClass;
    (props.kindOfMessage === 'outgoing') ? (messageClass = s.outgoing) : (messageClass = s.incoming);

    return (
        <div className={`${s.massage} ${messageClass}`}>
            <p>{props.text}</p>
        </div>
    )
}