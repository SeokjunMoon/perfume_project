import React from 'react'
import styles from './FragranceBlock.module.css'


const FragranceBLock = ({title, description, img}) => {
    return (
        <div className={styles.container}>
            <img src={img} alt={title + '/' + description} />
            <div>{title}</div>
            <div>{description}</div>
        </div>
    )
}

export default FragranceBLock