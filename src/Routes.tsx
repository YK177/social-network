import {Redirect, Route, Switch} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import React from "react";
import {StoreType} from "./redux/store";

type RoutesPropsType = {
    store: StoreType
}

export const Routes: React.FC<RoutesPropsType> = ({store}) => {

    const state = store.getState()

    return (
        <Switch>
            <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
            <Route path={'/profile'} render={() => <Profile
                data={state.profilePage}
                dispatch={store.dispatch.bind(store)}
            />}/>
            <Route path={'/dialogs'} render={() => <Dialogs
                data={state.dialogsPage}
                dispatch={store.dispatch.bind(store)}
            />}/>
            <Route path={'/news'} render={() => <News/>}/>
            <Route path={'/music'} render={() => <Music/>}/>
            <Route path={'/settings'} render={() => <Settings/>}/>
        </Switch>
    )
}