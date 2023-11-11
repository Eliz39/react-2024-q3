import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { SearchComponent } from "../../components/SearchComponent";
import { CardsRenderer } from "../../components/CardsRenderer";

import { BASE_URL } from "../../BASE_URL";

import { CardType } from "../../types/CardType";

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
    if (!searchTerm) {
      fetch(`${BASE_URL}/?page=${currentPage}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          setDataArr(data.results);
          setPages(data.info.pages);
        })
        .finally(() => setLoading(false));
    } else {
      handleSearchButtonClick();
    }
  }, [currentPage]);

  const handleSearchButtonClick = () => {
    const queryParam = searchTerm.trim().toLowerCase();
    fetch(`${BASE_URL}?name=${queryParam}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setDataArr(data.results);
      })
      .finally(() => setLoading(false));
  };

  const handleInputValueChange = (value: string) => {
    setSearchTerm(value);
    localStorage.setItem("searchTerm", value);
  };

  return (
    <>
      {loading === false ? (
        <>
          <SearchComponent
            value={searchTerm}
            onChange={(value) => handleInputValueChange(value)}
            handleClick={handleSearchButtonClick}
          />
          <CardsRenderer
            cardsArr={dataArr}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pages={pages}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
      <Outlet />
    </>
  );
}
