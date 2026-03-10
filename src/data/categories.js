import { products } from "./products";

export const womenTops = products.filter(
  (product) => product.category === "women-tops",
);

export const topPick = products.filter(
  (product) => product.category === "top-pick",
);

export const newArrival = products.filter(
  (product) => product.category === "new-arrival",
);
