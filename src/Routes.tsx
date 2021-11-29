import {Redirect, Route, Switch} from 'react-router-dom'
import {News} from './components/News/News'
import {Music} from './components/Music/Music'
import {Settings} from './components/Settings/Settings'
import React from 'react'
import {DialogsContainer} from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'


export const Routes = () => {
    return (
        <Switch>
            <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
            <Route path={'/profile/:userId'} render={() => <ProfileContainer/>}/>
            <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
            <Route path={'/users'} render={() => <UsersContainer/>}/>
            <Route path={'/news'} render={() => <News/>}/>
            <Route path={'/music'} render={() => <Music/>}/>
            <Route path={'/settings'} render={() => <Settings/>}/>
        </Switch>
    )
}