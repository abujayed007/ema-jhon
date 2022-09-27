import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
    // console.log(props)
    const {name, img, price, seller,ratings} = props.product
    const {handleAddToCart} = props
    return (
        <div className='product-container'>
            <img src={img} alt=""/>
            <div className="product-info">
            <h3 className='product-name'>{name}</h3>
            <p>Price: ${price}</p>
            <p>Seller: {seller}</p>
            <p>Rating: {ratings}</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'> 
            <p>Add To Cart</p> 
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;