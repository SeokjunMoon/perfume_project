import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/main_layout/Layout';
import styles from './MyPage.module.css'
import HeartImage from '../../images/heart.png'
import FragranceBlock from '../../components/FragranceBlock/FragranceBlock'
import PerfumeBottle from '../../components/perfume_bottle/Bottle'
import ProfileNone from '../../images/profile_none.png'
import BottleImg from '../../images/bottle_color.png'
import FlatButton from '../../components/flat_button/FlatButton'


const MyPage = () => {

    /*
    * 로그인 정보를 불러오는 부분입니다
    * 여기에다가 백엔드 데이터를 불러와주세요
    */
    const user = {
        login: true,
        account: {
            ID: 'asdf',
            PW: '123456'
        },
        name: '문석준',
        profile: '', //따로 설정하지 않을 경우에 ''처리
        bookmark: {
            fragrances: [
                [1,"만다린","달콤하고 새콤한 귤의 향","만다린은 시트러스 계열입니다. 흔히 생각하는 귤의 이미지로 워터링 + 스윗함 + 새콤함을 가지고 있는 향료입니다.\n향을 전반적으로 밝게 만들어 주기 때문에 밝고 가벼운 분위기의 향에 어울립니다. 특유의 스윗한 느낌은 Spicy 계열과 조합이 좋습니다.\n특히, 샌달우드, 파출리, 레몬처럼 상큼함과 시원함을 가지고 있는 향들과 잘 어울립니다.","불가리 - 아쿠아 아마라, 루이비통 - 에프터눈 스웜, 캘리포니아 드림","Citrus"  ],
                [20,"배(페어)","달콤하고 신선한 과일 향","배(페어)는 프루티 계열입니다. 달콤하고 섬세하여 과일 다육을 묽게 표현한 향입니다. 장미과 나무와 관목의 열매에 대한 향기입니다. \n신선하고 깨끗한 향이 과즙의 감각을 일깨웁니다.","디올 - J'adore, 입생로랑 - Black Opuim","Fruity"  ],
                [12,"프리지아","싱그럽고 포근한 향","프리지아는 플로럴 계열입니다. 파우더리한 꽃 향기를 특징으로 가집니다. 포근한 꽃 향기가 풍성하게 나며 '리날리올'이라는 성분이 \n진정 효과를 줍니다. 시트러스 계열, 스파이시 계열과 잘 어울립니다.","조말론 - 잉글리쉬 페어 앤 프리지아, 산차마리아노벨라 - 아쿠아 디 콜","Floral"  ],
                [16,"자스민","싱그럽고 풍부한 꽃 향","자스민은 Floral 계열입니다. 부드러우면서 따뜻한 향 뒤 약간의 동물적 향취를 가지고 있습니다. Floral \n노트에서 장미와 같이 가장 중요한 역할을 하는 향료로, 조합에 따라 다양한 향으로 표현될 수 있습니다. 사람에 따라서는 향긋한 꽃 향기 대신 꼬릿꼬릿한 \n냄새를 먼저 맡는 사람도 있습니다.","장파투 - Joy, 캘빈클라인 - Beauty","Floral"  ],
                [14,"아이리스","상큼하고 포근한 파우더 향, 비누 향","아이리스는 플로럴 계열입니다. 포근한 파우더와 비누 향을 가지고 있는 매우 플로럴한 향입니다. 무거운 느낌을 가지고 \n있어, 여성미, 성숙미를 표현하고자 할 때 많이 쓰이는 향입니다. 시트러스 계열, 머스크 계열과 잘 어울립니다.","프라다 - 레스 인퓨전 디 프라다 아이리스, \n샤넬 - No.19","Floral"  ],
            ],
            perfumes: [
                [
                    /*
                    * 북마크한 향수 이름. 브랜드 향수를 북마크할 경우 해당 향수명으로 저장, 제작한 경우에는 초기값은 001, 002 순으로
                    * 탑노트, 미들노트, 베이스노트 순서로 재료들이 저장됨.
                    * 저장할 때에는 ['재료명', 용량] 으로 저장
                    */
                    'first', 
                    [['비터오렌지', 5], ['주니퍼베리', 10]], //탑 노트
                    [['카모마일', 10], ['로즈', 3], ['자몽', 2], ['사이프러스', 10], ['세이지', 5], ['클로브', 5]], //미들 노트
                    [['시더우드', 5], ['샌달우드', 5]] //베이스 노트
                ],
                [
                    'second',
                    [['만다린', 5], ['비터오렌지', 10]],
                    [['프리지아', 10], ['로즈', 3], ['자몽', 2], ['사이프러스', 10], ['세이지', 5], ['클로브', 5]],
                    [['시더우드', 5], ['샌달우드', 5]]
                ],
                [
                    '조말론 - 우드 세이지 앤 씨 솔트',
                    [['암브레트 씨', 0]],
                    [['씨 솔트', 0]],
                    [['세이지', 0]]
                ],
                [
                    '조말론 - 블랙베리 앤 베어',
                    [['블랙베리', 0]],
                    [['월계수', 0]],
                    [['시더우드', 0]]
                ],
                [
                    '딥디크 - 오 데 썽',
                    [['비터오렌지', 0]],
                    [['주니퍼베리', 0], ['오렌지 꽃', 0]],
                    [['시더우드', 0], ['통카빈', 0]]
                ]
            ]
        }
    };
    //-------------------------------------
    /*
    * user 객체에서 fragrances와 perfumes 변경시에는
    * setBookmarkFragrances(user.bookmark.fragrances)
    * setBookmarkPerfumes(user.bookmark.perfumes)
    * 이 두개를 무조건 호출해줘야 변경사항이 반영됨
    */
    const [ login, setLoginState ] = useState(user.login);
    const [ bookmarkFragrances, setBookmarkFragrances ] = useState(user.bookmark.fragrances);
    const [ bookmarkPerfumes, setBookmarkPerfumes ] = useState(user.bookmark.perfumes);
    const [ fragranceOpened, setFragranceOpened ] = useState(false);
    const [ perfumeOpened, setPerfumeOpened ] = useState(false);
    const [ clickedPerfume, setClickedPerfume ] = useState(bookmarkPerfumes[0]);
    //-------------------------------------


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
        width: '100%',
        marginBottom: '30px'
    };

    const profile_icon_style = {
        width: '100px',
        height: '100px'
    };

    const CloseButtonStyle = {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: '24px 24px',
        color: '#2C6E49',
        cursor: 'pointer',
        zIndex: 3
    };
    

    return (
        <Layout title='Blooming Fragrance'>
            <div className={styles.container}>
                <div style={{margin: '0 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                        <img src={user.profile == ''? ProfileNone : user.profile} alt='profile' style={profile_icon_style} />
                        <div className={styles.myname}>{
                            login? (
                                <div className={styles.user_name}>
                                    {user.name}
                                </div>
                            ) : (
                                <Link to='/mypage/login' className={styles.gotoLogin}>로그인을 해주세요</Link>
                            )
                        }</div>
                    </div>

                    <Link to='' style={LinkStyle}><span className="material-icons" style={IconStyle}>list_alt</span>주문내역</Link>

                    <button to='/mypage/information' className={styles.edit_info} onClick={ (event) => {
                        if (login) {
                            // let pwpw = document.getElementById('confirm-pw-window');
                            // pwpw.style.display = 'flex';
                            // pwpw.style.top = 'calc(50% - ' + (pwpw.offsetHeight / 2) + ')';
                            // pwpw.style.left = 'calc(50% - ' + (pwpw.offsetWidth / 2) + ')';
                            window.location.href = '/mypage/information';
                        }
                        else {
                            alert('로그인이 필요한 서비스입니다!');
                        }
                    }}><span className="material-icons" style={IconStyle}>person</span>내 정보 수정</button>

                    <div className={styles.fragrances}>
                        <div style={LeftAlign}><img src={HeartImage} style={HeartStyle}/><span style={{fontSize: '20px'}}>향료</span></div>
                            {
                                login? 
                                    bookmarkFragrances.length == 0? 
                                    (
                                        <div style={{margin: '50px auto', fontSize: '18px', textDecoration: 'none', color: '#000000'}}>북마크에 등록된 항료가 없습니다</div>
                                    )
                                    :
                                    (
                                        <div>
                                            <div className={styles.bookmark_fragrances}>
                                                {
                                                    bookmarkFragrances.map( (e, index) => {
                                                        if (index <= 3) {
                                                            return (
                                                                <div key={index}><FragranceBlock title={e[1]} description={e[2]} id={'mypage-fragrance-' + index} /></div>
                                                            )
                                                        }
                                                        if (index > 3) {
                                                            return (
                                                                <div key={index}><FragranceBlock title={e[1]} description={e[2]} id={'mypage-fragrance-' + index} style={{display: 'none'}}/></div>
                                                            )
                                                        }
                                                    })
                                                }
                                            </div>
                                            {
                                                bookmarkFragrances.length > 4 && (
                                                    <button className={styles.more} onClick={ event => {
                                                        if (fragranceOpened) {
                                                            let len = bookmarkFragrances.length;
                                                            for (let i = 4; i < len; i++) {
                                                                document.getElementById('mypage-fragrance-' + i).style.display = 'none';
                                                            }
                                                            document.getElementById('drop-down').style.display = 'block';
                                                            document.getElementById('drop-up').style.display = 'none';
                                                        }
                                                        else {
                                                            let len = bookmarkFragrances.length;
                                                            for (let i = 3; i < len; i++) {
                                                                document.getElementById('mypage-fragrance-' + i).style.display = 'flex';
                                                            }
                                                            document.getElementById('drop-down').style.display = 'none';
                                                            document.getElementById('drop-up').style.display = 'block';
                                                        }
                                                        setFragranceOpened(!fragranceOpened);
                                                    }}><span className="material-icons" id='drop-down'>expand_more</span><span className="material-icons" id='drop-up' style={{display: 'none'}}>expand_less</span></button>
                                                )
                                            }
                                        </div>
                                    )
                                :
                                (
                                    <Link to='/mypage/login' style={{margin: '50px auto', fontSize: '20px', textDecoration: 'none', color: '#000000'}}>
                                        로그인이 필요합니다!
                                    </Link>
                                )
                            }
                    </div>


                    <div style={LeftAlign}><img src={HeartImage} style={HeartStyle}/><span style={{fontSize: '20px'}}>향수</span></div>
                    <div className={styles.perfumes}>
                        {
                            login? 
                                bookmarkPerfumes.length == 0? 
                                (
                                    <div style={{margin: '50px auto', fontSize: '18px', textDecoration: 'none', color: '#000000'}}>북마크에 등록된 향수가 없습니다</div>
                                )
                                :
                                (
                                    <div>
                                        <div className={styles.bookmark_fragrances}>
                                        {
                                            bookmarkPerfumes.map( (e, index) => {
                                                if ( index <=3 ) {
                                                    return (
                                                        <div key={index} id={'mypage-perfume-' + index} style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', cursor: 'pointer'}} onClick={ (event) => {
                                                            document.getElementById('heart-perfume-window').style.display = 'flex';
                                                            setClickedPerfume(bookmarkPerfumes[index]);
                                                        }}>
                                                            <img src={BottleImg} alt='bottle-image' width='120'/>
                                                            <span style={{width: '100%', whiteSpace: 'pre-wrap', textAlign: 'center', fontSize: '18px', marginTop: '10px'}}>{
                                                                e[0].replace(' - ', '\n')
                                                            }</span>
                                                        </div>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <div key={index} id={'mypage-perfume-' + index} style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'none', cursor: 'pointer'}} onClick={ (event) => {
                                                            document.getElementById('heart-perfume-window').style.display = 'flex';
                                                            setClickedPerfume(bookmarkPerfumes[index]);
                                                        }}>
                                                            <img src={BottleImg} alt='bottle-image' width='120'/>
                                                            <span style={{width: '100%', whiteSpace: 'pre-wrap', textAlign: 'center', fontSize: '18px', marginTop: '10px'}}>{
                                                                e[0].replace(' - ', '\n')
                                                            }</span>
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                        </div>
                                        {
                                            bookmarkFragrances.length > 4 && (
                                                <button className={styles.more} onClick={ event => {
                                                    if (perfumeOpened) {
                                                        let len = bookmarkFragrances.length;
                                                        for (let i = 4; i < len; i++) {
                                                            document.getElementById('mypage-perfume-' + i).style.display = 'none';
                                                        }
                                                        document.getElementById('drop-down-pf').style.display = 'block';
                                                        document.getElementById('drop-up-pf').style.display = 'none';
                                                    }
                                                    else {
                                                        let len = bookmarkFragrances.length;
                                                        for (let i = 3; i < len; i++) {
                                                            document.getElementById('mypage-perfume-' + i).style.display = 'flex';
                                                        }
                                                        document.getElementById('drop-down-pf').style.display = 'none';
                                                        document.getElementById('drop-up-pf').style.display = 'block';
                                                    }
                                                    setPerfumeOpened(!perfumeOpened);
                                                }}><span className="material-icons" id='drop-down-pf'>expand_more</span><span className="material-icons" id='drop-up-pf' style={{display: 'none'}}>expand_less</span></button>
                                            )
                                        }
                                    </div>
                                )
                                
                            :
                            (
                                <Link to='/mypage/login' style={{margin: '50px auto', fontSize: '20px', textDecoration: 'none', color: '#000000'}}>
                                    로그인이 필요합니다!
                                </Link>
                            )
                        }
                    </div>
                </div>

                {/* <div className={styles.confirm_pw_window} id='confirm-pw-window'>
                    <span className="material-icons" style={CloseButtonStyle} onClick={(event) => {
                        document.getElementById('confirm-pw-window').style.display = 'none';
                    }}>close</span>
                    <span className={styles.confirm_title}>본인 확인을 위해 비밀번호를 입력해주세요.</span>

                    <input placeholder='PW' id='confirm-pw-input' className={styles.pw_input}/>

                    <div style={{marginTop: '40px'}}><FlatButton color='#4C956C' highlight='#2C6E49' width='200px' height='100%' style={{fontSize: '24px', padding: '12px 16px'}} onClick={(event) => {
                        if (document.getElementById('confirm-pw-input').value == user.account.PW) {
                            window.location.href = '/mypage/information'
                        }
                    }}>{'확인'}</FlatButton></div>
                </div> */}

                <div className={styles.heart_perfume_window} id='heart-perfume-window'>
                    <span className="material-icons" style={CloseButtonStyle} onClick={(event) => {
                        document.getElementById('heart-perfume-window').style.display = 'none';
                    }}>close</span>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: '60px'}}>
                        <img src={BottleImg} alt='finish-bottle' className={styles.bottle_img}/>
                        <span style={{fontSize: '20px', whiteSpace: 'pre-wrap', textAlign: 'center', marginTop: '10px'}}>{clickedPerfume[0].replace(' - ', '\n')}</span>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', width: '100%', fontSize: '20px'}}>
                        <span style={{marginBottom: '6px'}}>{'탑 노트(' + clickedPerfume[1].reduce( (accumulator, current) => {
                            return accumulator + current[1];
                        }, 0) + 'ml):'}</span>

                        <div style={{display: 'flex', flexFlow: 'row wrap', marginBottom: '40px'}}>
                            {
                                clickedPerfume[1].map( (e, index) => {
                                    let text = (e[1] == 0? e[0] : e[0] + '(' + e[1] + 'ml)');
                                    return (
                                        <span>{text + (index != clickedPerfume[1].length - 1? ',\u00a0' : '')}</span>
                                    )
                                })
                            }
                        </div>


                        <span style={{marginBottom: '6px'}}>{'미들 노트(' + clickedPerfume[2].reduce( (accumulator, current) => {
                            return accumulator + current[1];
                        }, 0) + 'ml):'}</span>

                        <div style={{display: 'flex', flexFlow: 'row wrap', marginBottom: '40px'}}>
                            {
                                clickedPerfume[2].map( (e, index) => {
                                    let text = (e[1] == 0? e[0] : e[0] + '(' + e[1] + 'ml)');
                                    return (
                                        <span>{text + (index != clickedPerfume[2].length - 1? ',\u00a0' : '')}</span>
                                    )
                                })
                            }
                        </div>

                        <span style={{marginBottom: '6px'}}>{'베이스 노트(' + clickedPerfume[3].reduce( (accumulator, current) => {
                            return accumulator + current[1];
                        }, 0) + 'ml):'}</span>

                        <div style={{display: 'flex', flexFlow: 'row wrap', marginBottom: '40px'}}>
                            {
                                clickedPerfume[3].map( (e, index) => {
                                    let text = (e[1] == 0? e[0] : e[0] + '(' + e[1] + 'ml)');
                                    return (
                                        <span>{text + (index != clickedPerfume[3].length - 1? ',\u00a0' : '')}</span>
                                    )
                                })
                            }
                        </div>

                        <input placeholder='메모를 남겨보세요!' className={styles.heart_memo} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default MyPage