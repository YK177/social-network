export type PostType = {
    id: number
    avatar: string
    name: string
    lastSeen: number
    comment: string
    likeCounter: number
    shareCounter: number
}
export type ProfilePageType = {
    newPostText: string
    posts: PostType[]
}
export type DialogType = {
    id: number
    name: string
    avatar: string
}
export type MessageType = {
    id: number
    text: string
    kindOfMessage: string
}
export type DialogsPageType = {
    newMessageText: string
    dialogs: DialogType[]
    messages: MessageType[]
}
export type FriendType = {
    id: number
    avatar: string
    firstName: string
    lastName: string
}
export type SideBarType = {
    friends: FriendType[]
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SideBarType
}
export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}

//===Store=======================================
export const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {
                    id: 1,
                    avatar: 'https://images.generated.photos/8HvfbgpUo0GD5FBOHMDk7LOvFB_wKaSmG5DzRfd6nMs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wNTQ0/MDY0LmpwZw.jpg',
                    name: 'Erik Jhonson',
                    lastSeen: 15,
                    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur dolorem error inventore iste labore laborum optio perspiciatis praesentium vel. Esse, fuga libero maiores optio pariatur perspiciatis, possimus quia sit tempora, voluptate voluptates voluptatum. Aliquid aperiam atque dignissimos doloremque in iste iusto numquam odio praesentium, quod sed sunt vitae? Aliquam commodi placeat ratione recusandae suscipit temporibus voluptates! A ab aliquid at autem doloribus earum enim esse eum in itaque magni maiores nisi odit quo rem, repudiandae sed sequi similique suscipit totam. Adipisci corporis debitis ea eaque est, eveniet illum minus omnis porro quia, quibusdam repellat saepe sed tempore, unde voluptatum.',
                    likeCounter: 324,
                    shareCounter: 98
                },
                {
                    id: 2,
                    avatar: 'https://images.generated.photos/8HvfbgpUo0GD5FBOHMDk7LOvFB_wKaSmG5DzRfd6nMs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wNTQ0/MDY0LmpwZw.jpg',
                    name: 'Erik Jhonson',
                    lastSeen: 36,
                    comment: 'Amet, lectus sodales accumsan sed sit faucibus. Leo, est. Justo amet hac tempus sed sed sapien sed luctus vitae imperdiet amet non molestie dui ex. Dui quam, tempus eleifend dictum. Libero, urna amet, faucibus. Amet, quis, dui sapien interdum non tortor, efficitur mattis ut. Non in lectus vestibulum augue sodales sodales mauris eget odio. Mattis in integer nunc quis, sit amet, et integer vulputate amet, mattis platea interdum urna urna amet, non aenean odio. Sed elit. Non lectus nec in et ipsum orci, ornare interdum elit. Hac odio. In amet dui est. Non urna hac vitae lorem faucibus. Efficitur cursu.',
                    likeCounter: 15,
                    shareCounter: 2
                }
            ]
        },
        dialogsPage: {
            newMessageText: '',
            dialogs: [
                {
                    id: 1,
                    name: 'Albert Herrera',
                    avatar: 'https://images.generated.photos/kz5RXoqT5RQbMcwPce2BB61EmJeCgg_nnSYufYvII-0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjgzNTA0LmpwZw.jpg'
                },
                {
                    id: 2,
                    name: 'Natsuki Minako',
                    avatar: 'https://imgproxy.generated.photos/DAdtlihSCyxITsXjf3_1k54Ueyq3FJYnxQiiqXinCF0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNTQzNzAzLnBu/Zw.png'
                },
                {
                    id: 3,
                    name: 'Bryan O\'Ryan',
                    avatar: 'https://imgproxy.generated.photos/sk_shJ-TA6ctVuqGtL7M_TkH5ACrWQ7CYr9GcPnQHS0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNTYyMDg0LnBu/Zw.png'
                }
            ],
            messages: [
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
        },
        sideBar: {
            friends: [
                {
                    id: 1,
                    avatar: 'https://imgproxy.generated.photos/DAdtlihSCyxITsXjf3_1k54Ueyq3FJYnxQiiqXinCF0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNTQzNzAzLnBu/Zw.png',
                    firstName: 'Natsuki',
                    lastName: 'Minako',
                },
                {
                    id: 2,
                    avatar: 'https://imgproxy.generated.photos/sk_shJ-TA6ctVuqGtL7M_TkH5ACrWQ7CYr9GcPnQHS0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNTYyMDg0LnBu/Zw.png',
                    firstName: 'Bryan',
                    lastName: 'O\'Ryan'
                },
                {
                    id: 3,
                    avatar: 'https://images.generated.photos/kz5RXoqT5RQbMcwPce2BB61EmJeCgg_nnSYufYvII-0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjgzNTA0LmpwZw.jpg',
                    firstName: 'Albert',
                    lastName: 'Herrera'
                }
            ]
        }
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: new Date().getTime(),
                avatar: 'https://images.generated.photos/8HvfbgpUo0GD5FBOHMDk7LOvFB_wKaSmG5DzRfd6nMs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wNTQ0/MDY0LmpwZw.jpg',
                name: 'Erik Jhonson',
                lastSeen: 0,
                comment: this._state.profilePage.newPostText,
                likeCounter: 0,
                shareCounter: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === 'ADD-MASSAGE') {
            const newMessage: MessageType = {
                id: new Date().getTime(),
                text: this._state.dialogsPage.newMessageText,
                kindOfMessage: 'outgoing'
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber()
        }
    }
}
//===============================================

//===Action types================================
export type ActionType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addMassageAC>
    | ReturnType<typeof updateNewMessageTextAC>
//================================================

//===Action creators==============================
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText
    } as const
}

export const addMassageAC = () => {
    return {
        type: 'ADD-MASSAGE'
    } as const
}

export const updateNewMessageTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText
    } as const
}
//=================================================