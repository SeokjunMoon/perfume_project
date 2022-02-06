import React from 'react'
import { Helmet } from 'react-helmet'
import styles from './Layout.module.css'


const Layout = ({ children, match, location, history, title }) => {

    const navButtonStyle = {
        color: '#2C6E49',
        padding: '0'
    };


    return (
        <div className={styles.container}>
            <Helmet>
                <title>{(title == null? 'Perfume Fragrance' : title)}</title>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            </Helmet>

            <div className={styles.header}>
                <button className={styles.NavButton}><span className="material-icons" style={navButtonStyle}>menu</span></button>
            </div>

            {children}
        </div>
    );
}

export default Layout