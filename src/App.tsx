import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {SideBar} from './components/Sidebar/SideBar';
import {Footer} from './components/Footer/Footer';
import {Routes} from './Routes';

const App = () => {
    return (
        <HashRouter>
            <div className="page">
                <Header/>
                <SideBar />
                <main className={'content'}>
                    <Routes />
                </main>
                <Footer/>
            </div>
        </HashRouter>
    );
}

export default App;