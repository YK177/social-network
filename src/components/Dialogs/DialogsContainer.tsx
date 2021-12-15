import {Dialogs} from './Dialogs'
import {addMassage, DialogsPageType, updateNewMessageText} from '../../redux/dialogs-reducer'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/store'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'
import React from 'react'

type MapStatePropsType = {
    data: DialogsPageType
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        data: state.dialogsPage,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        addMassage,
        updateNewMessageText,
    }),
    withAuthRedirect
)(Dialogs)