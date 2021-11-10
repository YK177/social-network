import {Redirect, Route, Switch} from 'react-router-dom';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import React from 'react';
import {ActionType, StateType} from './redux/redux-store';

type RoutesPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}

export const Routes: React.FC<RoutesPropsType> = ({state,dispatch}) => {

    return (
        <Switch>
            <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
            <Route path={'/profile'} render={() => <Profile
                data={state.profilePage}
                dispatch={dispatch}
            />}/>
            <Route path={'/dialogs'} render={() => <Dialogs
                data={state.dialogsPage}
                dispatch={dispatch}
            />}/>
            <Route path={'/news'} render={() => <News/>}/>
            <Route path={'/music'} render={() => <Music/>}/>
            <Route path={'/settings'} render={() => <Settings/>}/>
        </Switch>
    )
}