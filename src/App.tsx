import React from 'react'
import './App.css'
import {HashRouter} from 'react-router-dom'
import {SideBar} from './components/Sidebar/SideBar'
import {Footer} from './components/Footer/Footer'
import {Routes} from './Routes'
import HeaderContainer from './components/Header/HeaderContainer'

const App = () => {
    return (
        <HashRouter>
            <div className="page">
                <HeaderContainer/>
                <SideBar/>
                <main className={'content'}>
                    <Routes/>
                </main>
                <Footer/>
            </div>
        </HashRouter>
    )
}

export default App