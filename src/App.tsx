import React from 'react';
import './App.css';
import {StoreType} from './redux/store';
import {HashRouter} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {SideBar} from './components/Sidebar/SideBar';
import {Footer} from './components/Footer/Footer';
import {Routes} from "./Routes";

type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = ({store}) => {
    const state = store.getState()

    return (
        <HashRouter>
            <div className="page">
                <Header/>
                <SideBar data={state.sideBar}/>
                <main className={'content'}>
                    <Routes store={store}/>
                </main>
                <Footer/>
            </div>
        </HashRouter>
    );
}

export default App;