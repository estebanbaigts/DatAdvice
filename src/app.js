import React from 'react';
import NavBar from './acceuil/navbar/navbar';
import Home from './acceuil/home';
import YourComponent from './acceuil/polygon';
import './app.css';

const App = () => {
    return (
        <div>
            <NavBar />
            <YourComponent />
            <Home />
        </div>
    );
};

export default App;
