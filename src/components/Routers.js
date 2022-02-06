import React from 'react';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/main'
import FragranceComponentPage from './pages/fragrance-component';


const Routers = () => {
    return (
        <Routes>
            <Route exact path='/' component={MainPage} />
            <Route path='/fragrance-component' component={FragranceComponentPage} />
        </Routes>
    );
}

export default Routers;
