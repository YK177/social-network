import React from 'react';
import './App.css';
import {ActionType, StateType} from './redux/redux-store';
import {HashRouter} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {SideBar} from './components/Sidebar/SideBar';
import {Footer} from './components/Footer/Footer';
import {Routes} from './Routes';

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}

const App: React.FC<AppPropsType> = ({state, dispatch}) => {


    return (
        <HashRouter>
            <div className="page">
                <Header/>
                <SideBar data={state.sideBar}/>
                <main className={'content'}>
                    <Routes state={state} dispatch={dispatch}/>
                </main>
                <Footer/>
            </div>
        </HashRouter>
    );
}

export default App;