import React from 'react';
import Image from './Image';
import Price from './Price';
import Title from './Title';
import './Card.css'
const Card = ({name, img, price}) => {
    // console.log(props.item)
    // const {name, img, price} = props;
    return (
        <div>
            <h1 className='mb-12 h-12'>{name}</h1>
             <img className='w-64' src={img} alt="" />
            <p>Price :{price} Tk</p>
        </div>
    );
};

export default Card;  