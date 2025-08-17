import ProductCard from "./ui/ProductCard";
const Home = () => {
    return(
        <>
        <div className="min-h-screen ">
            <h1>Products</h1>
            <div className="product_list_wrapper grid grid-cols-12">
            <div className="col-span-3">
            <ProductCard/>
            </div>
            </div>
        </div>
        </>
    );
}
export default Home;