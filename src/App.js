import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/main_layout/Layout';
import MainPage from './pages/main/MainPage'
import FragranceComponentPage from './pages/fragrance-component/FragranceComponentPage'
import LoginPage from './pages/login/LoginPage'
import MyPage from './pages/mypage/MyPage'


const App = () => {
    return (
        <Fragment>
            <Layout />
            <div style={{margin: '0 20px'}}>
                <Routes>
                    <Route path='/' element={<MainPage />} exact={true} />
                    <Route path='/perfume_project' element={<MainPage />} exact={true} />
                    <Route path='/fragrance-component' element={<FragranceComponentPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/mypage' element={<MyPage />} />
                </Routes>
            </div>
        </Fragment>
    );
}

export default App;
