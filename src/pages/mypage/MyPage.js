import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/main_layout/Layout';
import styles from './MyPage.module.css'
import HeartImage from '../../images/heart.png'


const MyPage = () => {

    let loggined = false;
    const user = {
        name: 'undefined',
        bookmark: {
            fragrance: {},
            perfume: {}
        }
    };


    const LinkStyle = {
        textDecoration: 'none',
        color: '#000000',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        fontSize: '20px',
        width: '100%',
        marginBottom: '24px'
    };

    const HeartStyle = {
        marginRight: '8px'
    };

    const IconStyle = {
        marginRight: '8px',
        color: '#054A29'
    };

    const LeftAlign = {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        width: '100%'
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
                    <div style={LeftAlign}><img src={HeartImage} style={HeartStyle}/><span style={{fontSize: '20px'}}>향료</span></div>
                    {
                        loggined? (
                            <>
                            </>
                        )
                        :
                        (
                            <Link to='/mypage/login' style={{margin: '50px auto', fontSize: '20px', textDecoration: 'none', color: '#000000'}}>
                                로그인이 필요합니다!
                            </Link>
                        )
                    }
                </div>

                <div className={styles.perfumes}>
                    <div style={LeftAlign}><img src={HeartImage} style={HeartStyle}/><span style={{fontSize: '20px'}}>향수</span></div>
                    {
                        loggined? (
                            <>
                            </>
                        )
                        :
                        (
                            <Link to='/mypage/login' style={{margin: '50px auto', fontSize: '20px', textDecoration: 'none', color: '#000000'}}>
                                로그인이 필요합니다!
                            </Link>
                        )
                    }
                </div>

                <Link to='' style={LinkStyle}><span class="material-icons" style={IconStyle}>list_alt</span>주문내역</Link>

                <Link to='/mypage/information' style={LinkStyle}><span class="material-icons" style={IconStyle}>person</span>내 정보 수정</Link>
            </div>
        </Layout>
    )
}

export default MyPage