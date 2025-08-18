import axios from "axios";

const BASE_URL = 'https://fakestoreapi.com/';

export const ProductListing = async() => {
    const response = await axios.get(BASE_URL+'products');
    return response.data;
}
export const ProductSingle = async(id:number) => {
    const response = await axios.get(BASE_URL+`product/${id}`);
    return response.data;
}