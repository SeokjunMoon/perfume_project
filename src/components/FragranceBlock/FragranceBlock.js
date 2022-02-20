import React from 'react'
import styles from './FragranceBlock.module.css'


const FragranceBlock = ({ title, description, onClick, id }) => {
    let clicked = false;

    return (
        <button className={styles.container} onClick={ event => {
            onClick(event, id, clicked);
            clicked = !clicked;
        }} id={id}>
            <img src={process.env.PUBLIC_URL + '/images/notes/' + title + '.png'} alt={title} className={styles.note_image}/>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
        </button>
    )
}

export default FragranceBlock