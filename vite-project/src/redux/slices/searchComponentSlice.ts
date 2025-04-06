import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchComponentState {
  searchTerm: string;
}

const initialState: SearchComponentState = {
  searchTerm: localStorage.getItem("searchTerm") ?? "",
};

const searchComponentSlice = createSlice({
  name: "searchComponent",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = searchComponentSlice.actions;
export const searchComponentReducer = searchComponentSlice.reducer;
