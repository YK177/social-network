import {Redirect, Route, Switch} from 'react-router-dom';
import {Profile} from './components/Profile/Profile';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import React from 'react';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

export const Routes = () => {
    return (
        <Switch>
            <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
            <Route path={'/profile'} render={() => <Profile/>}/>
            <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
            <Route path={'/news'} render={() => <News/>}/>
            <Route path={'/music'} render={() => <Music/>}/>
            <Route path={'/settings'} render={() => <Settings/>}/>
        </Switch>
    )
}