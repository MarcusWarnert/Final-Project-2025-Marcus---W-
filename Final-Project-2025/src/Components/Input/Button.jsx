

export default function Button({ id, type, label, classes, handleClick }) {
    return(
        <button id={`${id}-button`} type={type} onClick={handleClick} className={classes}>
            {label}
        </button>
    );
}
