import {Dialogs} from './Dialogs';
import {addMassageAC, DialogsPageType, updateNewMessageTextAC} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    data: DialogsPageType
}
type MapDispatchPropsType = {
    sendMessage: () => void
    updateText: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        data: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: () => {
            dispatch(addMassageAC())
        },
        updateText: (text: string) => {
            dispatch(updateNewMessageTextAC(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)