import React from "react"
import styles from './Toggle.module.css'


const Toggle = ( { title, onClick, style, id } ) => {
    let toggled = false;

    const icon_style = {
        transition: 'transform 0.2s ease-in-out'
    };

    return (
        <button id={id} onClick={ event => {
            onClick(event, toggled, id);

            let arrow_icon = document.getElementById('arrow-' + id);
            if (toggled) {
                arrow_icon.style.transform = 'rotate(0deg)';
            }
            else {
                arrow_icon.style.transform = 'rotate(90deg)';
            }

            toggled = !toggled;
        }} className={styles.container}>
            <span className="material-icons" id={'arrow-' + id} style={icon_style}>arrow_right</span>
            <span>{title}</span>
        </button>
    )
}

export default Toggle