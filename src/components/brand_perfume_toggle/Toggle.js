import React from "react"
import styles from './Toggle.module.css'
import down from '../../images/down.png'
import { Link } from 'react-router-dom'


const Toggle = ( { title, onClick, style, id, note } ) => {
    let toggled = false;

    const icon_style = {
        transition: 'transform 0.2s ease-in-out'
    };

    const location = {
        pathname: '/fragrance-component',
        state: {
            type: 'brand',
            name: title,
            note_info: note
        }
    }

    const LinkStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <button id={id} className={styles.container}>
            <div onClick={ event => {
                onClick(event, toggled, id);

                let arrow_icon = document.getElementById('arrow-' + id);
                if (toggled) {
                    arrow_icon.style.transform = 'rotate(0deg)';
                }
                else {
                    arrow_icon.style.transform = 'rotate(90deg)';
                }

                toggled = !toggled;
            }} className={styles.toggle}>
                <span className="material-icons" id={'arrow-' + id} style={icon_style}>arrow_right</span>
                <span>{title}</span>
            </div>
            <Link to={location.pathname} state={location.state} style={LinkStyle}><img src={down} alt='download-recipe' className={styles.down} /></Link>
        </button>
    )
}

export default Toggle