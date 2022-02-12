import React from 'react'
import styles from './FlatButton.module.css'


const FlatButton = ({ children, color, shadow, highlight, style, onClick, width, height }) => {

    const ObjectCopy = (a, b) => {
        const temp = Object.assign({}, a);
        return Object.assign(temp, b);
    };


    const basicButtonStyle = {
        border: 'none',
        borderRadius: '15px',
        padding: '8px 16px',
        color: '#FFFFFF',
        backgroundColor: (color == null? '#4C956C' : color),
        boxShadow: '6px 6px 0px ' + (shadow == null? '#FFFFFF' : shadow)
    };

    if (width != null) basicButtonStyle.width = width;
    if (height != null) basicButtonStyle.height = height;


    const DURATION = 250;
    const applyButtonStyle = (style == null? basicButtonStyle : ObjectCopy(basicButtonStyle, style));

    return (
        <button className={styles.flat} style={applyButtonStyle}
        onMouseDown = { event => {
            event.target.animate([
                {boxShadow: '-6px -6px 0px ' + (highlight == null? '#4C956C' : highlight)}
            ], {
                duration: DURATION,
                fill: 'forwards'
            })
        }}
        onMouseUp = { event => {
            event.target.animate([
                {boxShadow: '6px 6px 0px ' + (shadow == null? '#FFFFFF' : shadow)}
            ], {
                duration: DURATION,
                fill: 'forwards'
            });
            onClick();
        }}
        onMouseOver={ event => {
            event.target.animate([
                {boxShadow: '6px 6px 0px ' + (highlight == null? '#4C956C' : highlight)}
            ], {
                duration: DURATION,
                fill: 'forwards'
            });
        }}
        onMouseOut={ event => {
            event.target.animate([
                {boxShadow: '6px 6px 0px ' + (shadow == null? '#FFFFFF' : shadow)}
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