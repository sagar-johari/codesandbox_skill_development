import { useEffect, useState } from "react";
import ProductCard from "./ui/ProductCard";
import { ProductListing } from "../api/axios";
import type { Product } from "../types/product";
import SearchBar from "./SearchBar";

const Home = () => {
const [products,setProduct]=useState<Product[]>([]);
const [isLoading,setisLoading]=useState(true);
const [isError,setisError]=useState(false);
const [isModalOpen,setisModalOpen]=useState(false);
const [searchQuery, setSearchQuery] = useState(""); // 🔍 search state

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

    const openModal = () =>{setisModalOpen(true)}
    const closeModal = () =>{setisModalOpen(false)}

   {/* Modal */}
   

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
        const filteredProducts = products.filter((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
    return(
        <>
        
        <div className="min-h-screen container ">
            <h1>Products</h1>
            <div className="flex justify-between">
            <button onClick={openModal}>Add Product</button>
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
            <div className="product_list_wrapper grid grid-cols-12">
            {products?.map((product)=>(
            <div className="col-span-3">
                <ProductCard data={product}/>
            </div>
            ))
            
            }
            </div>
        </div>
        {isModalOpen && (
    <div className="fixed inset-0 min-h-screen min-w-screen bg-[#000] flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={closeModal}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-lg p-6 w-96 z-10">
        <h2 className="text-xl font-semibold mb-4">Add Product</h2>
        
        <input
          type="text"
          placeholder="Product name"
          className="w-full border rounded-lg px-3 py-2 mb-4"
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>
    </div>
  )}
        </>
    );
}
export default Home;