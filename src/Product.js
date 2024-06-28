import './Product.css'

export default function Product(props){
       
    return (
        <div className="one-prouduct">
                {props.product.price<15?<h4>cheap</h4>:
                <h4>expencive</h4>}
            <h3>{props.product.name + " : "+"₪ " + props.product.price + " " }</h3>
            <div className='img-url'>
              <img src={props.product.imgUrl}/>    
       <input type="button" value={"מחק מוצר מהרשימה"} onClick={()=>{props.deletP(props.product.id)}}/>
       </div>
    </div>

    )
}