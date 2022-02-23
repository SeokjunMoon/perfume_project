import React from 'react'
import styles from './MainPage.module.css'
import FlatButton from '../../components/flat_button/FlatButton'
import { Link } from 'react-router-dom'
import Layout from '../../components/main_layout/Layout'


const MainPage = () => {
    return (
        <Layout title='Blooming Fragrance'>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.title}>Blooming fragrance</div>

                    <div className={styles.description1}>안녕하세요<br/>향료를 직접 조합해<br/>나만의 향수를 만드는</div>
                    <div className={styles.description2}><span style={{color: '#054A29'}}>Blooming fragrance</span> &nbsp;입니다</div>
                    <div className={styles.description3}>세상에 유일한 향기를 만들어보세요</div>
                </div>

                <Link to='/fragrance-component' state={{type: 'none', name: 'none', note_info: {}}} className={styles.btn}><FlatButton color='#4C956C' highlight='#74D3AE' width='100%' height='100%' style={{fontSize: '30px', marginBottom: '30px', textShadow: '0.5px 0.5px 0 #FFFFFF, 0.5px -0.5px 0 #FFFFFF, -0.5px -0.5px 0 #FFFFFF, 0 0 0 #FFFFFF'}}>{'make perfume ->'}</FlatButton></Link>
            </div>
        </Layout>
    )
}


export default MainPage