import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { SearchComponent } from "../../components/SearchComponent";
import { CardsRenderer } from "../../components/CardsRenderer";

import { BASE_URL } from "../../BASE_URL";

import { CardType } from "../../types/CardType";

export function MainPage() {
  const [loading, setLoading] = useState(true);
  const [dataArr, setDataArr] = useState([] as CardType[]);
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("searchTerm") ?? ""
  );

  useEffect(() => {
    if (!searchTerm) {
      fetch(BASE_URL)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          setDataArr(data.results);
        })
        .finally(() => setLoading(false));
    } else {
      handleClick();
    }
  }, []);

  const handleClick = () => {
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
            handleClick={handleClick}
          />
          <CardsRenderer cardsArr={dataArr} />
        </>
      ) : (
        <p>Loading...</p>
      )}
      <Outlet />
    </>
  );
}
