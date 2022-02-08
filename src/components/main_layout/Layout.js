import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import styles from './Layout.module.css'
import home from '../../images/home.png'


const Layout = ({ children, match, location, history, title }) => {

    const navButtonStyle = {
        color: '#2C6E49',
        padding: '0',
        fontSize: '30px'
    };


    return (
        <div className={styles.container}>
            <Helmet>
                <title>{(title == null? 'Perfume Fragrance' : title)}</title>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
            </Helmet>

            <div className={styles.header}>
                <div style={{position: 'absolute', top: '0', left: '0', width: '80px', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Link to='/'><img src={home} style={{width: '24px', height: '24px', cursor: 'pointer'}}/></Link>
                </div>

                <div className={styles.TopMenu} id='top-menu' onMouseLeave={ event => {
                    document.getElementById('top-menu').style.transform = 'scaleX(0)';
                    document.getElementById('nav-button').style.width = '80px';
                }}>
                    <button className={styles.TopMenuButton}>perfume recipe</button>
                    <button className={styles.TopMenuButton}>category</button>
                    <button className={styles.TopMenuButton}>review</button>
                    <Link to='/mypage'><button className={styles.TopMenuButton}>my page</button></Link>
                </div>
                <button id='nav-button' className={styles.NavButton} onMouseEnter={ event => {
                    event.target.style.width = '0';
                    document.getElementById('top-menu').style.transform = 'scaleX(1)';
                }}><span className="material-icons" style={navButtonStyle}>menu</span></button>
            </div>

            {children}
        </div>
    );
}

export default Layout