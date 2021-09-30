import React from 'react';
import './App.css';
import {StateType} from './redux/state';
import {BrowserRouter, Route} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {SideBar} from './components/Sidebar/SideBar';
import {Profile} from './components/Profile/Profile';
import {Footer} from './components/Footer/Footer';
import {Dialogs} from './components/Dialogs/Dialogs';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';

type AppPropsType = {
    state: StateType
}

const App: React.FC<AppPropsType> = ({state}) => {
    return (
        <BrowserRouter>
            <div className="page">
                <Header/>
                <SideBar data={state.sideBar}/>
                <main className={'content'}>
                    <Route path={'/dialogs'} render={() => <Dialogs data={state.dialogsPage}/>}/>
                    <Route path={'/profile'} render={() => <Profile data={state.profilePage}/>}/>
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
