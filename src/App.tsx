import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogType, MessageType, PostsType} from "./index";

type AppPropsType = {
    posts: Array<PostsType>
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="page">
                <Header/>
                <Sidebar/>
                <main className={'content'}>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path={'/profile'} render={() => <Profile posts={props.posts}/>}/>
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
