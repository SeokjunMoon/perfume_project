import React, { Fragment } from 'react';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import Layout from './components/main_layout/Layout';
import MainPage from './pages/main/MainPage'
import FragranceComponentPage from './pages/fragrance-component/FragranceComponentPage'


const App = () => {
    return (
        <Fragment>
            <Layout />
            <Routes>
                <Route path='/' element={<MainPage />} exact={true} />
                <Route path='/fragrance-component' element={<FragranceComponentPage />} />
            </Routes>
        </Fragment>
    );
}

export default App;
