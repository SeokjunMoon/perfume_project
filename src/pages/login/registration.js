import React from 'react'
import styles from './registration.module.css'
import FlatButton from '../../components/flat_button/FlatButton'


const registration = () => {
    return (
        <div className={styles.container}>            
            <div className={styles.title}>회원가입</div>
            <input type='text' placeholder='이름을 입력하세요.' className={styles.InputPlace} />
            <span className={styles.description}>성+이름 ex) 홍길동</span>
            <input type='text' placeholder='아이디를 입력하세요.' className={styles.InputPlace} />
            <span className={styles.description}>5~8자리 입력</span>
            <input type='password' minLength='8' maxLength='15' placeholder='비밀번호를 입력하세요.' className={styles.InputPlace} />
            <span className={styles.description}>8~15자리 입력, 영문과 숫자 반드시 입력</span>
            <input type='password' minLength='8' maxLength='15' placeholder='비밀번호를 확인하세요.' className={styles.InputPlace} />
            <span className={styles.description}>비밀번호 확인</span>

            <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center', width: '100%', marginBottom: '12px'}}>
                <button className={styles.WhiteButton}>우편번호</button>
                <div className={styles.PostNumberText} id='PostNumber'>00000</div>
            </div>
            
            <input type='text' placeholder='상세주소를 입력하세요.' className={styles.InputPlace} />
            <span className={styles.description}>주소 입력</span>
        </div>
    )
}


export default registration