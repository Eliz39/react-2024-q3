import { createContext } from "react";
import { CardType } from "../types/CardType";

const initialContext = {
  searchTerm: "",
  setSearchTerm: (term: string) => {
    console.log(term);
  },
  dataArr: [] as CardType[],
};

export const AppContext = createContext(initialContext);
