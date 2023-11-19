import { configureStore } from "@reduxjs/toolkit";
import { cardsRendererReducer } from "./slices/cardsRendererSlice";
import { detailsPageReducer } from "./slices/detailsPageSlice";
import { searchComponentReducer } from "./slices/searchComponentSlice";

export const store = configureStore({
  reducer: {
    cardsRenderer: cardsRendererReducer,
    detailsPage: detailsPageReducer,
    searchComponent: searchComponentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
