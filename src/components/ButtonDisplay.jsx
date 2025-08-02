
import React, {useEffect, useState} from 'react'   
function ButtonDisplay() {
    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem('count');
        return savedCount !== null ? Number(savedCount) : 0;
    });
    
    const handleOnClickI = () => {
        setCount(count + 1);
    }
    const handleOnClickD = () => {
        setCount(count - 1);
    }

    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);

    return(
        <>
            <h2>{count}</h2>
            <button onClick={handleOnClickI}>Increase</button>
            <button onClick={handleOnClickD}>Decrease</button>
        </>
    );
}

export default ButtonDisplay;