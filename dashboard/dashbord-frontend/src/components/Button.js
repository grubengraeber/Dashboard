export const Button = props => {
    return (
        <>
            <button key={props.key} onClick={props.onClick} className={".btn"} value={props.text}>
            </button>
        </>
    );
};