import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type PostsType = {
    id: number
    avatar: string
    name: string
    lastSeen: number
    comment: string
    likeCounter: number
    shareCounter: number
}
export type DialogType = {
    id: number
    avatar: string
    name: string
}
export type MessageType = {
    id: number
    text: string
    kindOfMessage: string
}

const posts: Array<PostsType> = [
    {
        id: 1,
        avatar: 'https://imgproxy.generated.photos/DAdtlihSCyxITsXjf3_1k54Ueyq3FJYnxQiiqXinCF0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNTQzNzAzLnBu/Zw.png',
        name: 'Natsuki Minako',
        lastSeen: 15,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur dolorem error inventore iste labore laborum optio perspiciatis praesentium vel. Esse, fuga libero maiores optio pariatur perspiciatis, possimus quia sit tempora, voluptate voluptates voluptatum. Aliquid aperiam atque dignissimos doloremque in iste iusto numquam odio praesentium, quod sed sunt vitae? Aliquam commodi placeat ratione recusandae suscipit temporibus voluptates! A ab aliquid at autem doloribus earum enim esse eum in itaque magni maiores nisi odit quo rem, repudiandae sed sequi similique suscipit totam. Adipisci corporis debitis ea eaque est, eveniet illum minus omnis porro quia, quibusdam repellat saepe sed tempore, unde voluptatum.',
        likeCounter: 324,
        shareCounter: 98
    },
    {
        id: 2,
        avatar: 'https://imgproxy.generated.photos/sk_shJ-TA6ctVuqGtL7M_TkH5ACrWQ7CYr9GcPnQHS0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNTYyMDg0LnBu/Zw.png',
        name: 'Bryan O\'Ryan',
        lastSeen: 36,
        comment: 'Amet, lectus sodales accumsan sed sit faucibus. Leo, est. Justo amet hac tempus sed sed sapien sed luctus vitae imperdiet amet non molestie dui ex. Dui quam, tempus eleifend dictum. Libero, urna amet, faucibus. Amet, quis, dui sapien interdum non tortor, efficitur mattis ut. Non in lectus vestibulum augue sodales sodales mauris eget odio. Mattis in integer nunc quis, sit amet, et integer vulputate amet, mattis platea interdum urna urna amet, non aenean odio. Sed elit. Non lectus nec in et ipsum orci, ornare interdum elit. Hac odio. In amet dui est. Non urna hac vitae lorem faucibus. Efficitur cursu.',
        likeCounter: 15,
        shareCounter: 2
    }
]
const dialogs: Array<DialogType> = [
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
]
const messages: Array<MessageType> = [
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
]

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
