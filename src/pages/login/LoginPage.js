import React from 'react'
import { Link } from 'react-router-dom'
import styles from './LoginPage.module.css'
import FlatButton from '../../components/flat_button/FlatButton'
import Kakao from '../../images/icons/kakao/카카오톡_로고.png'
import Naver from '../../images/icons/naver/btnG_아이콘원형.png'
import Apple from '../../images/icons/Apple Icon.png'
import Facebook from '../../images/icons/facebook.png'
import Google from '../../images/icons/Google Icon.png'


const LoginPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Blooming fragrance</div>
            <input type='text' placeholder='ID' className={styles.InputPlace} />
            <input type='password' placeholder='PW' className={styles.InputPlace} minLength='8' maxLength='15'/>
            <FlatButton color='#4C956C' highlight='#2C6E49' style={{width: '300px', height: '56px', fontSize: '24px', marginTop: '16px'}}>login</FlatButton>
            <div className={styles.BottomMenu}>
                <Link to='/mypage/registration' className={styles.BottomMenuButton}>회원가입</Link>
                <div className={styles.BottomMenuButton}>아이디/비밀번호 찾기</div>
            </div>
            <div className={styles.description}>간편 로그인</div>
            <nav className={styles.LoginNav}>
                <div><img src={Kakao} className={styles.LoginOption} /></div>
                <img src={Naver} className={styles.LoginOption} />
                <img src={Facebook} className={styles.LoginOption} />
                <img src={Google} className={styles.LoginOption} />
                <img src={Apple} className={styles.LoginOption} />
            </nav>
        </div>
    )
}


export default LoginPage