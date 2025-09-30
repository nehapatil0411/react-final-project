import axios from "axios";
import  React,{useEffect,useState} from "react";

function Products (){
    const [products,setproducts]=useState([]);
    const [loading,setloading]=useState(true);
        useEffect(()=>{
            axios.get("http://localhost:3000/products")  //fetching products from api using axios
            .then((response)=>{
                setproducts(response.data);
                setloading(false);
            });

        },[]);


        return(


            <div className="main">
                <h1 className="heading">Product Page</h1>
                <div className="box">{products.map((product)=>(
                    <div key={product.id}
                        style={{border:"1px solid black",

                        }}>
                            <div className="info">
                            <h2 className="id">{product.id}</h2>
                            <p className="title">{product.title}</p>
                            {/* <img src="{product.image}" alt="" /> */}
                            <p className="category">{product.category}</p>
                            <h4 className="price">₹{product.price}</h4>
                            <button className="edit" onClick={()=>handleEdit}>Edit</button>
                            <button className="delete">Delete</button>
                            </div>
                    </div>

                ))}</div>
            </div>
        )

}
export default Products;