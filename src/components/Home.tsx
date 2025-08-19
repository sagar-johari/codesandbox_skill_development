import { useEffect, useState } from "react";
import ProductCard from "./ui/ProductCard";
import { ProductListing } from "../api/axios";
import type { Product } from "../types/product";

const Home = () => {
const [products,setProduct]=useState<Product[]>([]);
const [isLoading,setisLoading]=useState(true);
const [isError,setisError]=useState(false);
    useEffect(()=>{
        ;(async()=>{
            try {
        setisLoading(true);
        setisError(false);
        const data = await ProductListing();
        if(data){
            setProduct(data);
        }
      } catch (error) {
          console.error("Error fetching products:", error);
          setisLoading(false);
        setisError(true);
      } finally {
        setisLoading(false);
      }
        })()
    },[]);
        if(isError){
            return(
                <>
                    <h1>An Error Occured</h1>
                </>
            )
        }
        if(isLoading){
            return(
                <>
                    <h1>Loading...</h1>
                </>
            )
        }
    return(
        <>
        <div className="min-h-screen container ">
            <h1>Products</h1>
            <button>Add Product</button>
            <div className="product_list_wrapper grid grid-cols-12">
            {products?.map((product)=>(
            <div className="col-span-3">
                <ProductCard data={product}/>
            </div>
            ))
            
            }
            </div>
        </div>
        </>
    );
}
export default Home;