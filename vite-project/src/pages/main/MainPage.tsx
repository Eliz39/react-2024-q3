import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";

import { getAllCharacters, searchCharacter } from "../../utils/api";

import { SearchComponent } from "../../components/SearchComponent";
import { CardsRenderer } from "../../components/CardsRenderer";

import {
  receivedCards,
  setPages,
  setIsLoading,
} from "../../redux/slices/cardsRendererSlice";

export function MainPage() {
  const dispatch = useAppDispatch();

  const { currentPage, isLoading } = useAppSelector(
    (state) => state.cardsRenderer
  );
  const { searchTerm } = useAppSelector((state) => state.searchComponent);

  useEffect(() => {
    const getDefalutCharacters = async () => {
      dispatch(setIsLoading(true));
      let data;
      if (!searchTerm) {
        data = await getAllCharacters(currentPage);
      } else {
        const queryParam = searchTerm.trim().toLowerCase();
        data = await searchCharacter(queryParam);
      }
      if (data) {
        dispatch(receivedCards(data.results));
        dispatch(setPages(data.info.pages));
      }
      dispatch(setIsLoading(false));
    };

    getDefalutCharacters();
  }, []);

  return (
    <>
      {isLoading === false ? (
        <>
          <SearchComponent />
          <CardsRenderer />
        </>
      ) : (
        <p>Loading...</p>
      )}
      <Outlet />
    </>
  );
}
