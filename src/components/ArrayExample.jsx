import React, { useState } from 'react';
import { guns } from './../../test';

const ArrayExample = () => {
    const [data, setData] = useState(guns)
    // console.log(data)
    const handleRemove = () => {
        setData([])
    }
    const handlerRemove = (id) => {
        // const filterData = data.filter((item) => item.id !== id)
        // console.log(filterData)
        setData(data.filter((item) => item.id !== id))
    }
    return (
        <div>
            <h1>Hello world</h1>
            <div>
                  { data &&
                data.map(singleData =>
                    <div>
                        <p>{singleData.name}</p>
                        <button onClick={()=>handlerRemove(singleData.id)} className='backgroundColor: bg-orange-500 p-2 mt-5'>Remove</button>

                    </div>)
            }
            </div>
            <div>
                <button onClick={handleRemove} className='mt-5 p-3 bg-green-400 text-black'>Remove All</button>
            </div>
        </div>
    );
};

export default ArrayExample;