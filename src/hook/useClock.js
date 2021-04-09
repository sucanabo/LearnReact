import {useState,useEffect} from 'react';

function formartDate(date){
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
}
function useClock(props) {
    const [time, setTime] = useState('');
    
    useEffect(() => {
        const clockInterval = setInterval(() => {
            const date = new Date();
            const dateStr = formartDate(date);
            setTime(dateStr);
        }, 1000);
        return () => {
            clearInterval(clockInterval);
        };
    }, []);
    return {time};
}

export default useClock;