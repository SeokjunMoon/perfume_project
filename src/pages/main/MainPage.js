import React from 'react'
import styles from './MainPage.module.css'
import FlatButton from '../../components/flat_button/FlatButton'
import { Link } from 'react-router-dom'


const MainPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>Blooming fragrance</div>

                <div className={styles.description1}>안녕하세요<br/>향료를 직접 조합해<br/>나만의 향수를 만드는</div>
                <div className={styles.description2}>Blooming fragrance 입니다</div>
                <div className={styles.description3}>세상에 유일한 향기를 만들어보세요</div>
            </div>

            <Link to='/fragrance-component'><FlatButton color='#4C956C' highlight='#74D3AE' style={{width: '320px', height: '80px', fontSize: '30px', marginBottom: '30px'}}>{'Make Perfume ->'}</FlatButton></Link>
        </div>
    )
}


export default MainPage