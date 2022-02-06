import React from 'react'
import styles from './FlatButton.module.css'


const FlatButton = ({ children, color, highlight, style, onClick, width, height }) => {

    const ObjectCopy = (a, b) => {
        const temp = Object.assign({}, a);
        return Object.assign(temp, b);
    };


    const basicButtonStyle = {
        border: 'none',
        borderRadius: '15px',
        padding: '8px 16px',
        fontSize: '30px',
        color: '#FFFFFF',
        lineHeight: '36px',
        backgroundColor: (color == null? '#4C956C' : color),
        boxShadow: '6px 6px 0px ' + (highlight == null? '#74D3AE' : highlight)
    };

    if (width != null) basicButtonStyle.width = width;
    if (height != null) basicButtonStyle.height = height;


    const DURATION = 250;
    const applyButtonStyle = (style == null? basicButtonStyle : ObjectCopy(basicButtonStyle, style));

    return (
        <button className={styles.flat} style={applyButtonStyle}
        onClick={onClick}
        onMouseOver={ event => {
            event.target.animate([
                {backgroundColor: (highlight == null? '#74D3AE' : highlight),
                boxShadow: '6px 6px 0px ' + (color == null? '#4C956C' : color)}
            ], {
                duration: DURATION,
                fill: 'forwards'
            });
        }}
        onMouseOut={ event => {
            event.target.animate([
                {backgroundColor: (color == null? '#4C956C' : color),
                boxShadow: '6px 6px 0px ' + (highlight == null? '#74D3AE' : highlight)}
            ], {
                duration: DURATION,
                fill: 'forwards'
            });
        }}>
            {children}
        </button>
    );
}

export default FlatButton;