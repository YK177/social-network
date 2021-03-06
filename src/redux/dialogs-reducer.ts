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
export type DialogsPageType = typeof initialState

const initialState = {
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
    ] as DialogType[],
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
    ] as MessageType[]
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case 'ADD-MASSAGE': {
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: new Date().getTime(),
                        text: state.newMessageText,
                        kindOfMessage: 'outgoing'
                    }
                ],
                newMessageText: ''
            }
        }
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            return {...state, newMessageText: action.newText}
        }
        default:
            return state
    }
}

type ActionType = ReturnType<typeof addMassage> | ReturnType<typeof updateNewMessageText>

export const addMassage = () => {
    return {
        type: 'ADD-MASSAGE'
    } as const
}

export const updateNewMessageText = (newText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText
    } as const
}

export default dialogsReducer