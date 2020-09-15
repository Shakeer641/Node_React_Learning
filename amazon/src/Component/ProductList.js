import React from "react";
import Product from './Product';

const ProductList = (props)=>{
    const products = [
        {   Name : "iphone", 
            Price : "50000", 
            imageUrl: "https://cdn.vox-cdn.com/thumbor/PDPaybexLzPoXsQAPeC1uvJoxWg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19212737/akrales_190918_3645_0166.jpg"
           },
        {   Name : "Samsung", 
            Price : "35000", 
            imageUrl: "https://cdn.vox-cdn.com/thumbor/PDPaybexLzPoXsQAPeC1uvJoxWg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19212737/akrales_190918_3645_0166.jpg"
        },
        {
            Name: "Nokia",
            Price: "40000",
            imageUrl: "https://cdn.vox-cdn.com/thumbor/PDPaybexLzPoXsQAPeC1uvJoxWg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19212737/akrales_190918_3645_0166.jpg"
        }
    ];
    const handleclick =(data)=> {
        console.log(data);
        props.handleClick(data);
    }
    return <div className="row">
            {products.map((item,index) => {
                return <Product ProductDetails={item} 
                handleclick = {handleclick} />
            })}
        </div>
}

export default ProductList;