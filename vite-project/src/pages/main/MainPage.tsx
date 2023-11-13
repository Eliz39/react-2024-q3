import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { AppContext } from "../../context/AppContext";
import { SearchComponent } from "../../components/SearchComponent";
import { CardsRenderer } from "../../components/CardsRenderer";

import { CardType } from "../../types/CardType";
import { getAllCharacters, searchCharacter } from "../../utils/api";

export function MainPage() {
  const urlParams = new URLSearchParams(useLocation().search);
  const pageParam = Number(urlParams.get("page"));

  const [loading, setLoading] = useState(true);
  const [dataArr, setDataArr] = useState([] as CardType[]);
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("searchTerm") ?? ""
  );
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(pageParam ? pageParam : 1);

  useEffect(() => {
    const getDefalutCharacters = async () => {
      if (!searchTerm) {
        const data = await getAllCharacters(currentPage);
        setLoading(false);
        if (data) {
          setDataArr(data.results);
          setPages(data.info.pages);
        }
      } else {
        handleSearchButtonClick();
      }
    };
    getDefalutCharacters();
  }, [currentPage]);

  const handleSearchButtonClick = async () => {
    const queryParam = searchTerm.trim().toLowerCase();
    const data = await searchCharacter(queryParam);
    setLoading(false);
    if (data) {
      setDataArr(data.results);
      setPages(data.info.pages);
    }
  };

  return (
    <AppContext.Provider value={{ searchTerm, setSearchTerm, dataArr }}>
      {loading === false ? (
        <>
          <SearchComponent handleClick={handleSearchButtonClick} />
          <CardsRenderer
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pages={pages}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
      <Outlet />
    </AppContext.Provider>
  );
}
