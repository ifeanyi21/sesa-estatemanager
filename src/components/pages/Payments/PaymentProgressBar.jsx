import ProgressBar from 'react-bootstrap/ProgressBar';

function PaymentProgressBar({percent}) {
    return <ProgressBar now={percent} label={`${percent}%`} />;
}

export default PaymentProgressBar


