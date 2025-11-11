import React from 'react';

export default function Button({ id, type, label, classes, handleClick, children }) {
    return(
        <button id={`${id}-button`} type={type} onClick={handleClick} className={classes}>
            {children || label}
        </button>
    );
}
