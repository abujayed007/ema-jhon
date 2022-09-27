import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    const handleAddToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
        // console.log(newCart)
        // console.log(product)
    }

    return (
        <div className='shop-container'>
            <div className="products">
               {
                products.map(product  =><Product 
                        handleAddToCart={handleAddToCart}
                        key={product.id}
                        product={product} ></Product>)
               }
            </div>
            <div className="cart-container">
                <h2>Ordered Summary</h2>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;