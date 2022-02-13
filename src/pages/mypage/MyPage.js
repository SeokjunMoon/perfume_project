import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/main_layout/Layout';
import styles from './MyPage.module.css'


const MyPage = () => {

    let loggined = false;
    const user = {
        name: 'undefined',
        bookmark: {
            fragrance: {},
            perfume: {}
        }
    };


    return (
        <Layout title='Blooming Fragrance'>
            <div className={styles.container}>
                <div className={styles.ProfileBox}>
                    <div className={styles.profile}>

                    </div>
                    <div className={styles.myname}>{
                        loggined? (
                            <>
                                {user.name}
                            </>
                        ) : (
                            <Link to='/mypage/login' className={styles.gotoLogin}>로그인을 해주세요</Link>
                        )
                    }</div>
                </div>
                <div className={styles.fragrances}>

                </div>
                <div className={styles.perfumes}>

                </div>
            </div>
        </Layout>
    )
}

export default MyPage