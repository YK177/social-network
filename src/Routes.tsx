import {Redirect, Route, Switch} from 'react-router-dom'
import {Settings} from './components/Settings/Settings'
import React from 'react'
import {DialogsContainer} from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'


export const Routes = () => {
    return (
        <Switch>
            <Route path={'/'} exact render={() => <Redirect to={'/profile:userId'}/>}/>
            <Route path={'/profile/:userId'} render={() => <ProfileContainer/>}/>
            <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
            <Route path={'/users'} render={() => <UsersContainer/>}/>
            <Route path={'/settings'} render={() => <Settings/>}/>
        </Switch>
    )
}