import React from 'react';
import '../assets/css/Item.css';

const Item = (props) => {

    const {id, title, image, content} = props.producto
    
    return (
        <div className='item'>
            <img className='image' src={image} alt={id} />
            <p className='title'>{title}</p>
            <p className='content'>{content}</p>
        </div>
    )
}

export default Item;