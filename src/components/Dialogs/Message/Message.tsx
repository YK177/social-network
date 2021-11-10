import React from 'react';
import s from './Message.module.css';
import {MessageType} from '../../../redux/dialogs-reducer';

type MessagePropsType = {
    data: MessageType
}

export const Message: React.FC<MessagePropsType> = ({data}) => {

    let messageClass;
    (data.kindOfMessage === 'outgoing')
        ? (messageClass = s.outgoing)
        : (messageClass = s.incoming)

    return (
        <div className={`${s.massage} ${messageClass}`}>
            <p>{data.text}</p>
        </div>
    )
}