
const CountdownAmount = ({stateInfo, label}) => {
    return (
        <>
        <span className="countdown-section">
            <span className="countdown-amount">{stateInfo || '0'}</span>
            <span className="countdown-period">{label}</span>
            
        </span>
        </>
    );
}

export default CountdownAmount;