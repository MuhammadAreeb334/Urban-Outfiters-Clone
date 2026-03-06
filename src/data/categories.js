import { products } from "./products";

export const womenTops = products.filter(
  (product) => product.category === "women-tops"
);