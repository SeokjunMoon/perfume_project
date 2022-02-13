import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import styles from './Layout.module.css'
import home from '../../images/home.png'


const Layout = ({ children, match, location, history, title }) => {

    const navButtonStyle = {
        color: '#2C6E49',
        padding: '0',
        fontSize: '30px',
        padding: 'auto auto'
    };


    const onTopMenuCloseListener = () => {
        if (window.innerWidth <= 669) {
            document.getElementById('child-div').style.marginTop = '0px';
        }
        else {
            document.getElementById('nav-button').style.right = '0';
        }
        document.getElementById('top-menu').style.transform = 'scaleX(0)';
    };

    const onTopMenuOpenListener = (event) => {
        if (window.innerWidth <= 669) {
            document.getElementById('child-div').style.marginTop = '200px';
        }
        else {
            event.target.style.right = '-80px';
        }
        document.getElementById('top-menu').style.transform = 'scaleX(1)';
    };


    return (
        <div className={styles.container}>
            <Helmet>
                <title>{(title == null? 'Perfume Fragrance' : title)}</title>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
            </Helmet>

            <div className={styles.header}>
                <Link to='/' className={styles.HomeButton}>
                    <img src={home} style={{width: '24px', height: '24px', cursor: 'pointer'}}/>
                </Link>

                <div className={styles.TopMenu} id='top-menu' onMouseLeave={ () => onTopMenuCloseListener() }>
                    <button className={styles.TopMenuButton} onClick={ () => onTopMenuCloseListener() }>perfume recipe</button>
                    <button className={styles.TopMenuButton} onClick={ () => onTopMenuCloseListener() }>category</button>
                    <button className={styles.TopMenuButton} onClick={ () => onTopMenuCloseListener() }>review</button>
                    <Link to='/mypage'><button className={styles.TopMenuButton} onClick={ () => onTopMenuCloseListener() }>my page</button></Link>
                </div>
                <button id='nav-button' className={styles.NavButton} onMouseEnter={ event => onTopMenuOpenListener(event) }><span className="material-icons" style={navButtonStyle}>menu</span></button>
            </div>

            <div className={styles.child} id='child-div'>
                {children}
            </div>
        </div>
    );
}

export default Layout