import React from "react";
import s from './Dialogs.module.css';
import {DialogItem, DialogPropsType} from "./DialogItem/DialogItem";
import {Message, MessagePropsType} from "./Message/Message";

export const Dialogs = () => {

    const dialogs: Array<DialogPropsType> = [
        {
            id: 1,
            name: 'Albert Herrera',
            avatar: "https://images.generated.photos/kz5RXoqT5RQbMcwPce2BB61EmJeCgg_nnSYufYvII-0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjgzNTA0LmpwZw.jpg"
        },
        {
            id: 2,
            name: 'Natsuki Minako',
            avatar: "https://imgproxy.generated.photos/DAdtlihSCyxITsXjf3_1k54Ueyq3FJYnxQiiqXinCF0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNTQzNzAzLnBu/Zw.png"
        },
        {
            id: 3,
            name: 'Bryan O\'Ryan',
            avatar: "https://imgproxy.generated.photos/sk_shJ-TA6ctVuqGtL7M_TkH5ACrWQ7CYr9GcPnQHS0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNTYyMDg0LnBu/Zw.png"
        }
    ];

    const massages: Array<MessagePropsType> = [
        {id: 1, text: 'Hi! How are you? Where are you disappeared?', kindOfMessage: 'outgoing'},
        {id: 2, text: 'Hi! I\'m OK...', kindOfMessage: 'incoming'},
        {
            id: 3,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, eos voluptates. Culpa\n' +
                'dolorem dolores, iusto nisi numquam officiis placeat soluta! A accusamus accusantium alias\n' +
                'asperiores at consectetur corporis est facere illum, impedit ipsam iure labore magnam modi natus\n' +
                'nisi optio placeat praesentium quasi quidem reiciendis rerum veniam vitae voluptates\n' +
                'voluptatibus.',
            kindOfMessage: 'incoming'
        },
        {
            id: 4,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, eos voluptates. Culpa\n' +
                'dolorem dolores, iusto nisi numquam officiis placeat soluta! A accusamus accusantium alias\n' +
                'asperiores at consectetur corporis est facere illum, impedit ipsam iure labore magnam modi natus\n' +
                'nisi optio placeat praesentium quasi quidem reiciendis rerum veniam vitae voluptates\n voluptatibus.',
            kindOfMessage: 'outgoing'
        },
    ];

    return (
        <div className={s.container}>
            <div className={s.dialogsItems}>
                {
                    dialogs.map(d => {
                        return (
                            <DialogItem id={d.id} avatar={d.avatar} name={d.name}/>
                        )
                    })
                }
            </div>
            <div className={s.massages}>
                {
                    massages.map(m => {
                        return (
                            <Message id={m.id} text={m.text} kindOfMessage={m.kindOfMessage}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

