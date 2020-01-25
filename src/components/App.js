import React from 'react';
import Navbar from './Navbar';
import Routes from './Routes';
import { HashRouter } from 'react-router-dom';
import '../css/style.css';

function App() {
    return (        
        <HashRouter>
           <style>{'body { background-color: #202020; }'}</style>
            <Navbar />
            <Routes />
        </HashRouter>
    );
}

export default App;
