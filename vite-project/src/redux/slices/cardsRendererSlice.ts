import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "../../types/CardType";

export interface CardsRendererState {
  dataArr: CardType[];
  currentPage: number;
  pages: number;
  isLoading: boolean;
}

const initialState: CardsRendererState = {
  dataArr: [] as CardType[],
  currentPage: 1,
  pages: 1,
  isLoading: false,
};

const cardsRendererSlice = createSlice({
  name: "cardsRenderer",
  initialState,
  reducers: {
    receivedCards(state, action: PayloadAction<CardType[]>) {
      const dataArr = action.payload;
      dataArr.forEach((card) => {
        state.dataArr[card.id as number] = card;
      });
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setPages(state, action: PayloadAction<number>) {
      state.pages = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { receivedCards, setCurrentPage, setPages, setIsLoading } =
  cardsRendererSlice.actions;
export const cardsRendererReducer = cardsRendererSlice.reducer;
