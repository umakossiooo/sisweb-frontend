import api from ".";
import {Product} from "../types";

//GET ALL PRODUCTS
export const getAllProducts = async () => {
try {
const res = await api.get(`/product`);
// console.log(res.data); -> for connection testing purpose
const products: Product[] = await res.data.payload;
return products;
} catch (err) {
console.log(err);
}
};
