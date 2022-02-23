import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/main/MainPage'
import FragranceComponentPage from './pages/fragrance-component/FragranceComponentPage'
import LoginPage from './pages/login/LoginPage'
import Registration from './pages/login/registration'
import FindPage from './pages/login/find'
import MyPage from './pages/mypage/MyPage'
import MyInfo from './pages/mypage/myinfo'
import PerfumeRecipe from './pages/perfume-recipe/recipe'
import ReviewPage from './pages/review/review'


const App = () => {
    return (
        <Fragment>
            <Routes>
                <Route path='/' element={<MainPage />} exact={true} />
                <Route path='/perfume_project' element={<MainPage />} exact={true} />
                <Route path='/fragrance-component' element={<FragranceComponentPage />} />
                <Route path='/mypage' element={<MyPage />} />
                <Route path='/mypage/login' element={<LoginPage />} />
                <Route path='/mypage/registration' element={<Registration />} />
                <Route path='/mypage/find-account' element={<FindPage />} />
                <Route path='/mypage/information' element={<MyInfo />} />
                <Route path='/perfume-recipe' element={<PerfumeRecipe />} />
                <Route path='/review' element={<ReviewPage />} />
            </Routes>
        </Fragment>
    );
}

export default App;
