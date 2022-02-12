import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/main_layout/Layout';
import MainPage from './pages/main/MainPage'
import FragranceComponentPage from './pages/fragrance-component/FragranceComponentPage'
import LoginPage from './pages/login/LoginPage'
import Registration from './pages/login/registration'
import MyPage from './pages/mypage/MyPage'


const App = () => {
    return (
        <Fragment>
            <Layout />
                <Routes>
                    <Route path='/' element={<MainPage />} exact={true} />
                    <Route path='/perfume_project' element={<MainPage />} exact={true} />
                    <Route path='/fragrance-component' element={<FragranceComponentPage />} />
                    <Route path='/mypage' element={<MyPage />} />
                    <Route path='/mypage/login' element={<LoginPage />} />
                    <Route path='/mypage/registration' element={<Registration />} />
                </Routes>
        </Fragment>
    );
}

export default App;
