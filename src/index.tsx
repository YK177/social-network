import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {store} from './redux/state';

const renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree()

store.subscribe(renderTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();