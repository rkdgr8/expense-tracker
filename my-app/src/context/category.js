import { createContext, useContext } from "react";

export const CategoryListContext = createContext();

export function useCategories() {
  return useContext(CategoryListContext);
}
