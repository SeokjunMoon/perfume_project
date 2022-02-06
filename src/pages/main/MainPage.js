import React from 'react'
import styles from './MainPage.module.css'
import FlatButton from '../../components/flat_button/FlatButton'
import { Link } from 'react-router-dom'


const MainPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>Blooming fragrance</div>

                <div style={{margin: '10px auto', lineHeight: '160%', fontSize: '30px', fontWeight: '500'}}>안녕하세요<br/>향료를 직접 조합해<br/>나만의 향수를 만드는</div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '30px', fontWeight: '500'}}><div style={{color: '#054A29'}}>Blooming fragrance&nbsp;</div> 입니다</div>
                <div style={{margin: '10px auto', lineHeight: '160%', fontSize: '30px', color: '#054A29', marginTop: '70px', fontWeight: '500'}}>세상에 유일한 향기를 만들어보세요</div>
            </div>

            <Link to='/fragrance-component'><FlatButton color='#4C956C' highlight='#74D3AE' style={{width: '320px', height: '80px'}}>Make Perfume</FlatButton></Link>
        </div>
    )
}


export default MainPage