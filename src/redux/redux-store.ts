import {combineReducers, createStore} from 'redux';
import profileReducer, {ProfileActionType, ProfilePageType} from './profile-reducer';
import dialogsReducer, {DialogsActionType, DialogsPageType} from './dialogs-reducer';
import sidebarReducer, {SideBarType} from './sidebar-reducer';

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SideBarType
}
export type ActionType = ProfileActionType | DialogsActionType

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer
})

export let store = createStore(reducers);