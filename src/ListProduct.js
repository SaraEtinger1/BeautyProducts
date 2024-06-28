import { useState } from "react";
import Product from "./Product"



export default function ListProduct(){

    let [product,setProduct]= useState 
            ([{id:1,name:"שמפו",price:10,imgUrl:"https://www.epharma.co.il/media/catalog/product/cache/f54201e6e55bf6d26c652ab711ed0cbf/3/5/35279.jpg"},
                {id:2,name:"סבון-תינוק" ,price:23,imgUrl:"https://ucare.co.il/images/catalog/baby/sano-baby-keef/baby-keef-soap.jpg"},
                {id:3,name:"מרכך",price:12,imgUrl:"https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/HFM58_Z_P_7296073320289_1.png"},
                {id:4,name:"שמן-תינוקות",price:18,imgUrl:"https://saboncoil.twic.pics/_pics/products/xxl/2567/2567_1_20200304172922.jpg"}
            ])

    const removeProduct = (id)=>{
        let index = product.findIndex(item => item.id==id)
        let copy=[...product];
        copy.splice(index,1);
        setProduct(copy);
    }
    const cheap = (price) =>{
        let ind = product.findIndex(item => item.price==price)
        if( product.price<15)
            return "cheap";
    return "expensive";
}


    return(
        <div className="List-product">
            <h1>מוצרי טיפוח ונקיון</h1>
            <label>enter price</label>
            <input type="text"  onClick={()=>{cheap(product.price)}}/>
            <ul className="ul-product">
              {product.map((item,index) => {
                 return <li key={index+1}>
                    <p>{index+1+")"}</p>
                    <Product product={item} deletP={removeProduct}/>          
           </li>
            })} 
            </ul>
        </div>
    )
}