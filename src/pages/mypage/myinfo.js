import React from "react"
import styles from './myinfo.module.css'
import Layout from '../../components/main_layout/Layout'
import FlatButton from '../../components/flat_button/FlatButton'


const MyInfo = () => {

    /*
    * 로그인한 유저 정보를 저장하는 객체입니다
    */
    const USER_INFORMATION = {
        NAME: '홍길동',
        RESIDENT_REGISTRATION_NUMBER: '010101-3*****',
        ID: 'abc123',
        PW: '12345',
        POST: {
            NUMBER: 12345,
            ADRESS: '부산광역시 프로젝트구 향수로 4번길 행복동 힘내호'
        },
        PHONE_NUMBER: {
            AGENCY: 'SKT',
            NUMBER: ['010', '1234', '5678']
        }
    };


    const IconStyle = {
        padding: '0 4px 0 0'
    };

    const ConfirmButtonListener = () => {
        let current = document.getElementById('pw-confirm').value;
        if (current == USER_INFORMATION.PW) {
            document.getElementById('checking').style.display = 'none';
            document.getElementById('my-info-contents').style.display = 'grid';
        }
    };


    return (
        <Layout>
            <div className={styles.title}>내 정보</div>

            <div className={styles.checking} id='checking'>
                <span style={{fontSize: '24px', marginBottom: '50px', color: '#054A29'}}>본인 확인을 위해 비밀번호를 입력해주세요.</span>
                <input type='password' placeholder='PW' className={styles.InputPlace} minLength='8' maxLength='15' style={{width: '320px'}} id='pw-confirm'/>
                <div className={styles.confirm}><FlatButton width='100%' height='100%' highlight='#2C6E49' onClick={ () => ConfirmButtonListener() }>확인</FlatButton></div>
            </div>


            <div className={styles.contents} id='my-info-contents'>
                <span className={styles.text_title}>이름</span>
                <span className={styles.text_info}>{USER_INFORMATION.NAME}</span>

                <span className={styles.text_title}>주민번호</span>
                <span className={styles.text_info}>{USER_INFORMATION.RESIDENT_REGISTRATION_NUMBER}</span>

                <span className={styles.text_title}>아이디</span>
                <span className={styles.text_info}>{USER_INFORMATION.ID}</span>

                <span className={styles.text_title}>비밀번호</span>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <input type='password' placeholder='PW' className={styles.InputPlace} minLength='8' maxLength='15' value={USER_INFORMATION.PW}/>
                    <span className={styles.description}>8~15자리 입력, 영문과 숫자 반드시 입력</span>
                </div>

                <span className={styles.text_title}>비밀번호 확인</span>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <input type='password' placeholder='PW' className={styles.InputPlace} minLength='8' maxLength='15' value={USER_INFORMATION.PW}/>
                    <span className={styles.description}>비밀번호 확인</span>
                </div>

                <span className={styles.text_title}>주소</span>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex', marginBottom: '10px'}}>
                        <button className={styles.PostNumberButton}>우편번호</button>
                        <input type='text' placeholder='PW' className={styles.InputPlace} minLength='8' maxLength='15' value={USER_INFORMATION.POST.NUMBER}/>
                    </div>
                    <input type='text' placeholder='주소' className={styles.InputPlace} minLength='8' maxLength='15' value={USER_INFORMATION.POST.ADRESS}/>
                    <span className={styles.description}>주소 입력</span>
                </div>

                <span className={styles.text_title}>전화번호</span>
                <div style={{display: 'flex'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '600px'}}>
                        <div className={styles.phone_number}>
                            <button className={styles.AgencyButton}><span className="material-icons" style={IconStyle}>expand_more</span>{USER_INFORMATION.PHONE_NUMBER.AGENCY}</button>
                            <input type='text' pattern="[0-9]+" placeholder="" className={styles.InputPlace} maxLength='3'/>
                            <div style={{fontSize: '30px', color: '#054A29', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>-</div>
                            <input type='text' pattern="[0-9]+" placeholder="" className={styles.InputPlace} maxLength='4'/>
                            <div style={{fontSize: '30px', color: '#054A29', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>-</div>
                            <input type='text' pattern="[0-9]+" placeholder="" className={styles.InputPlace} maxLength='4'/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default MyInfo