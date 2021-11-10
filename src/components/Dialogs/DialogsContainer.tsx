import React from 'react';
import StoreContext from '../../StoreContext';
import {Dialogs} from './Dialogs';
import {addMassageAC, updateNewMessageTextAC} from '../../redux/dialogs-reducer';

export const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {store => {
                const sendMessageCallback = () => store.dispatch(addMassageAC())

                const updateTextCallback = (text: string) => {
                    store.dispatch(updateNewMessageTextAC(text))
                }
                return (
                    <Dialogs
                        data={store.getState().dialogsPage}
                        sendMessage={sendMessageCallback}
                        updateText={updateTextCallback}
                    />
                )
            }}
        </StoreContext.Consumer>
    )
}