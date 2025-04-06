import { createSlice } from "@reduxjs/toolkit";
import { CardType } from "../../types/CardType";

export interface DetailsPageState {
  characterData: CardType | null;
  isLoading: boolean;
}

const initialState: DetailsPageState = {
  characterData: null,
  isLoading: false,
};

const detailsPageSlice = createSlice({
  name: "detailsPage",
  initialState,
  reducers: {},
});

export const detailsPageReducer = detailsPageSlice.reducer;
