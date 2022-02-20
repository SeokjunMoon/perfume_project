import React from "react"
import styles from './find.module.css'
import Layout from '../../components/main_layout/Layout'


const find = () => {

    const component_basic_style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    };

    const dot_style = {
        backgroundColor: '#2C6E49',
        borderRadius: '100%',
        width: '15px',
        height: '15px'
    };

    const filter_button = {
        background: '#FFFFFF',
        border: '1px solid #054A29',
        boxSizing: 'border-box',
        borderRadius: '20px',
        width: 'fit-content',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 14px'
    };


    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.title}>아이디 찾기</div>

                <input type='text' placeholder='이름을 입력하세요.' className={styles.InputPlace} />
                <span className={styles.description}>성+이름 ex) 홍길동</span>

                <div className={styles.resident_number}>
                    <div style={component_basic_style}>
                        <input type='text' placeholder='생년월일 6자리' className={styles.InputPlace}/>
                        <span className={styles.description}>주민번호 앞자리</span>
                    </div>

                    <div style={{fontSize: '30px', color: '#054A29', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>-</div>

                    <input type='text' placeholder='' className={styles.InputPlace} style={{width: '50px', height: '50px'}}/>
                    <div className={styles.dot_grid}>
                        <div style={dot_style} />
                        <div style={dot_style} />
                        <div style={dot_style} />
                        <div style={dot_style} />
                        <div style={dot_style} />
                        <div style={dot_style} />
                    </div>
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', width: 'calc(100vw - 40px)', maxWidth: '600px'}}>
                    <div className={styles.phone_number}>
                        <button style={filter_button}><span class="material-icons">expand_more</span>SKT</button>
                        <input type='number' placeholder="" className={styles.InputPlace}/>
                        <div style={{fontSize: '30px', color: '#054A29', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>-</div>
                        <input type='number' placeholder="" className={styles.InputPlace}/>
                        <div style={{fontSize: '30px', color: '#054A29', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>-</div>
                        <input type='number' placeholder="" className={styles.InputPlace}/>
                    </div>
                    <button className={styles.finish_button}>완료</button>
                </div>
                <span className={styles.description}>휴대전화 번호 입력</span>


                <div className={styles.title}>비밀번호 찾기</div>

                <input type='text' placeholder='이름을 입력하세요.' className={styles.InputPlace} />
                <span className={styles.description}>성+이름 ex) 홍길동</span>

                <div className={styles.resident_number}>
                    <div style={component_basic_style}>
                        <input type='text' placeholder='생년월일 6자리' className={styles.InputPlace}/>
                        <span className={styles.description}>주민번호 앞자리</span>
                    </div>

                    <div style={{fontSize: '30px', color: '#054A29', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>-</div>

                    <input type='text' placeholder='' className={styles.InputPlace} style={{width: '50px', height: '50px'}}/>
                    <div className={styles.dot_grid}>
                        <div style={dot_style} />
                        <div style={dot_style} />
                        <div style={dot_style} />
                        <div style={dot_style} />
                        <div style={dot_style} />
                        <div style={dot_style} />
                    </div>
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', width: 'calc(100vw - 40px)', maxWidth: '600px'}}>
                    <div className={styles.phone_number}>
                        <button style={filter_button}><span class="material-icons">expand_more</span>SKT</button>
                        <input type='number' placeholder="" className={styles.InputPlace}/>
                        <div style={{fontSize: '30px', color: '#054A29', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>-</div>
                        <input type='number' placeholder="" className={styles.InputPlace}/>
                        <div style={{fontSize: '30px', color: '#054A29', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>-</div>
                        <input type='number' placeholder="" className={styles.InputPlace}/>
                    </div>
                    <button className={styles.finish_button}>완료</button>
                </div>
                <span className={styles.description}>휴대전화 번호 입력</span>
            </div>
        </Layout>
    )
}


export default find