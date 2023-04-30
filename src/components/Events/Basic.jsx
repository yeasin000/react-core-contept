import React, { useState } from 'react';

const Basic = () => {
    const [count, setCount] = useState(0)

    const PlusCount = () =>setCount(count + 1);
    const MinusCount = () =>setCount(count - 1);

    return (
        <div>
            <h1>Count :: {count}</h1>
            <button className='btn-danger p-2 m-5'
                onClick={PlusCount}>Increase</button>
            <button className='btn-secondary p-2 m-5'
                onClick={MinusCount}>Decrease</button>
        </div>
    );
};

export default Basic;