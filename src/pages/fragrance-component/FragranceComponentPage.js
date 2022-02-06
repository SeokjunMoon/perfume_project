import React from 'react'
import styles from './FragranceComponentPage.module.css'
import BottleImg from '../../images/bottle_color.png'


const FragranceComponentPage = () => {

    const CloseButtonStyle = {
        position: 'absolute',
        right: 0,
        margin: '32px 32px',
        color: '#2C6E49'
    };


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>Blooming fragrance</div>

                <div className={styles.contents}>
                    <img src={BottleImg} alt='bottle image' width='383' heigth='625' className={styles.bottle}/>

                    <div className={styles.comments}>

                        <span class="material-icons" style={CloseButtonStyle}>close</span>
                        <div className={styles.PopupWindow}>
                            <div>
                                <div style={{fontSize: '30px'}}>Fragrance Component</div>
                                <div style={{fontSize: '22px'}}>향수는 top note, middle note, base note로 구성되어 있습니다.</div>
                            </div>

                            <div className={styles.NoteInfo}>
                                <div className={styles.NoteName} style={{backgroundColor: '#FD9781'}}>Top note</div>
                                <div className={styles.descriptions}>탑노트는 가장 처음 맡게 되는 향입니다.<br/>
                                    향수를 뿌린 직후부터 알코올이 날라간 10분 전후의 향을 말하므로 향수의 첫인상을 결정하는 향입니다.<br/>
                                    향수의 5~10%를 블랜딩 비율로 갖습니다.</div>
                            </div>

                            <div className={styles.NoteInfo}>
                                <div className={styles.NoteName} style={{backgroundColor: '#F6E7CB'}}>Middle note</div>
                                <div className={styles.descriptions}>미들노트는 알코올이 날아간 후에 맡게 되는 향입니다.<br/>
                                    향수를 뿌린 후, 1시간 전후의 향을 말합니다.<br/>
                                    향이 안정적이며, 다른 향과의 배합이 어우러져 풍부하고 육감적인 향이 지속됩니다.<br/>
                                    보통 주위사람들이 느끼는 향과 가장 비슷합니다.
                                    향수의 50~80%를 블랜딩 비율로 갖습니다.</div>
                            </div>

                            <div className={styles.NoteInfo}>
                                <div className={styles.NoteName} style={{backgroundColor: '#A6C48A'}}>Base note</div>
                                <div className={styles.descriptions}>베이스노트는 모든 향이 다 날아간 후에 맡는 향입니다.<br/>
                                    향수를 뿌린 후 2~3시간 전후까지 지속됩니다.</div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FragranceComponentPage