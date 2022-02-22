import React, { useState } from 'react'
import styles from './FragranceBlock.module.css'


const FragranceBlock = ({ title, description, onClick, id, style, width}) => {

    const [ clicked, setClicked ] = useState(false);

    return (
        <button className={styles.container} style={style == null? {} : style} width={width} onClick={ event => {
            onClick(event, id, clicked);
            setClicked(!clicked);
        }} id={id}>
            <img src={process.env.PUBLIC_URL + '/images/notes/' + title + '.png'} alt={title} className={styles.note_image}/>
            <div className={styles.title}>{title}</div>
            {
                description != null && (
                    <div className={styles.description}>{description}</div>
                )
            }
        </button>
    )
}

export default FragranceBlock