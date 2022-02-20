import React from "react"
import styles from './Bottle.module.css'
import BottleImg from '../../images/bottle_color.png'


const Bottle = ({ name, top, middle, base, note, img }) => {

    const title_style = {
        fontSize: '26px',
        width: '100%',
        textAlign: 'left',
        margin: '0 0 20px 0'
    };


    return (
        <div className={styles.container}>
            <img src={img == null? BottleImg : img} alt='Bottle Image' className={styles.bottle}/>

            <div className={styles.contents}>
                <span style={title_style}>{name}</span>
                <div className={styles.note_info}>
                    <span className={styles.note_title}>탑 노트 : &nbsp;</span>
                    <div className={styles.note_list}>
                        {
                            top.map( (e, index) => {
                                return (
                                    <div className={styles.note}>
                                        <span>{e[0] + (index == top.length - 1? '' : ',\u00a0')}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.note_info}>
                    <span className={styles.note_title}>미들 노트 : &nbsp;</span>
                    <div className={styles.note_list}>
                        {
                            middle.map( (e, index) => {
                                return (
                                    <div className={styles.note}>
                                        <span>{e[0] + (index == middle.length - 1? '' : ',\u00a0')}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.note_info}>
                    <span className={styles.note_title}>베이스 노트 : &nbsp;</span>
                    <div className={styles.note_list}>
                        {
                            base.map( (e, index) => {
                                return (
                                    <div className={styles.note}>
                                        <span>{e[0] + (index == base.length - 1? '' : ',\u00a0')}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bottle