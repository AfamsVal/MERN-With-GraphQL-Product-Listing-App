import { PRODUCTS } from "../utils/index.js";

export const Category = {
  products: (parent, args, context) => {
    const { id } = parent;
    return PRODUCTS.filter((item) => item.categoryId === id);
  },
};
