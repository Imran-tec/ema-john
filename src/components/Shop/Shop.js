import React, { useState } from 'react';
import '../../fakeData'
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10)
    const [product, setProduct] = useState(first10)
    const [cart, serCart] = useState([])

    const addBtn = (product) => {
        console.log('produc add',product)
        const newCart = [...cart, product]
        serCart(newCart)
    }
    return (
        <div className="shop">
        <div className="shop-container">  
          {
              product.map(pd => <Product
                addBtn={addBtn}
                product = {pd}>{pd.name}</Product>)
       }</div>
          
          <div>
    <Cart cart = {cart}> </Cart>
          </div>
        </div>
    );
};

export default Shop;