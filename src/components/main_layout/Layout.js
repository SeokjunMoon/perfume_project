import React, { Component } from 'react'
import styles from './Layout.module.css'

const Layout = ({ children, match, location, history }) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <button className={styles.NavButton}>=</button>
            </div>
            {children}
        </div>
    );
}

export default Layout;
