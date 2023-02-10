import { CATEGORIES, PRODUCTS } from "../utils/index.js";

export const Query = {
  numberOfItems: () => {
    return "55";
  },
  products: () => PRODUCTS,
  product: (parent, args, context) => {
    if (!args?.id) {
      return {
        status: false,
        description: "No ID found!",
      };
    }
    const newProduct = PRODUCTS.find((prod) => prod.id === args.id);
    if (args.hasOwnProperty("id")) {
      return newProduct;
    }
  },

  categories: () => CATEGORIES,
  category: (parent, args, context) => {
    return CATEGORIES.find((item) => item.id === args.id);
  },
};
