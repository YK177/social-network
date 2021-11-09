import {ActionType, DialogsPageType, MessageType} from "./store";

export type DialogsActionType = ReturnType<typeof addMassageAC> | ReturnType<typeof updateNewMessageTextAC>

const dialogsReducer = (state: DialogsPageType, action: ActionType) => {
    switch (action.type) {
        case "ADD-MASSAGE":
            const newMessage: MessageType = {
                id: new Date().getTime(),
                text: state.newMessageText,
                kindOfMessage: 'outgoing'
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
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

export default dialogsReducer