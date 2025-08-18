import type { Product } from "../../types/product";

interface ProductType{
    data:Product
}
const ProductCard = ({ data }:ProductType) => {
  return (
    <div className="product_card p-4">
      <img src={data.image} alt={data.title} className="h-32 w-full aspect-square object-contain" />
      <h2 className="font-bold text-lg">{data.title}</h2>
      <p className="text-gray-600">${data.price}</p>
    </div>
  );
};
export default ProductCard;