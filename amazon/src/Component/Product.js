import React from 'react';

const Product = (props)=>{
    return <div className="col-md-3">
    <div className="card">
        <img className="card-img-top" src={props.ProductDetails.imageUrl} alt="Card image cap" />
        <div className="card-body">
            <p className="card-text">{props.ProductDetails.Name}</p>
            <button className="btn btn-primary"
                onClick={e=>{
                    props.handleclick(props.cartCount);
                }}
            >Add To Cart {props.ProductDetails.Price}</button>
        </div>
    </div>
</div>
}

export default Product;