import {Dialogs} from './Dialogs'
import {addMassage, DialogsPageType, updateNewMessageText} from '../../redux/dialogs-reducer'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/store'

type MapStatePropsType = {
    data: DialogsPageType
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        data: state.dialogsPage
    }
}

export const DialogsContainer = connect(mapStateToProps, {
    addMassage,
    updateNewMessageText,
})(Dialogs)