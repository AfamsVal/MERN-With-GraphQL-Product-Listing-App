import { CATEGORIES } from "../utils/index.js";

export const Product = {
  category: (parent, arg, context) => {
    const { categoryId } = parent;
    return CATEGORIES.find((category) => category.id === categoryId);
  },
};
