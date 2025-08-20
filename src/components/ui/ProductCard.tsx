import type { Product } from "../../types/product";

interface ProductType{
    data:Product;
    isFavourite: boolean;
    onToggleFavourite: () => void;
}
const ProductCard = ({ data, isFavourite, onToggleFavourite }:ProductType) => {
  return (
    <div className="product_card p-4">
      <button
        onClick={onToggleFavourite}
        className="absolute top-2 right-2 text-2xl"
      >
        {isFavourite ? "❤️" : "🤍"}
      </button>
      <img src={data.image} alt={data.title} className="h-32 w-full aspect-square object-contain" />
      <h2 className="font-bold text-lg">{data.title}</h2>
      <span>{data.category}</span>
      <p className="text-gray-600">Price:${data.price}</p>
      <p className="text-gray-600">Rating:{data?.rating.rate}  {data?.rating.count && '-'+data?.rating.count+' ratings'}</p>
      <a href="" className=" btn btn-primary w-full py-4 px-2">View</a>
    </div>
  );
};
export default ProductCard;