import {React} from 'react';
import useClock from '../../hook/useClock';
function Clock(props) {
    const {time} = useClock();
    return (
        <div className="container">
            <h1>{time}</h1>
        </div>
    );
}

export default Clock;