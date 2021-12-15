import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Settings} from './components/Settings/Settings'
import {Login} from './components/Login/Login'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'


export const Routes = () => {
    return (
        <Switch>
            {/*<Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>*/}
            <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
            <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
            <Route path={'/users'} render={() => <UsersContainer/>}/>
            <Route path={'/settings'} render={() => <Settings/>}/>
            <Route path={'/login'} render={() => <Login/>}/>
        </Switch>
    )
}