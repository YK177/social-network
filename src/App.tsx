import React from 'react';
import './App.css';
import {StoreType} from './redux/store';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {SideBar} from './components/Sidebar/SideBar';
import {Profile} from './components/Profile/Profile';
import {Footer} from './components/Footer/Footer';
import {Dialogs} from './components/Dialogs/Dialogs';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';

type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = ({store}) => {
    const state = store.getState()

    return (
        <BrowserRouter>
            <div className="page">
                <Header/>
                <SideBar data={state.sideBar}/>
                <main className={'content'}>
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
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;