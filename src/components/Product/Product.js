import React from 'react';
import './Product.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Product = (props) => {
    const addBtn = props.addBtn;
    const {name,img,seller,price} = props.product;
    return (
        <div className="product-container">
           <div >
       <img src={img} alt=""/>

           </div>
           <div>
     <h4 className="name">{name}</h4>
    <h6>by: {seller}</h6>
    <h5>${price}</h5>
    <button className="btn btn-primary" onClick={() => addBtn(props.product)}>add to cart</button>

           </div>
        </div>
    );
};

export default Product;