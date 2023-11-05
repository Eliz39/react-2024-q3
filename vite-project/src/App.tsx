import { useEffect, useState } from "react";
import styled from "styled-components";
import { SearchComponent } from "./components/SearchComponent";
import { CardType } from "./types/CardType";
import { CardsRenderer } from "./components/CardsRenderer";
import { BASE_URL } from "./BASE_URL";
import "./styles/App.css";
import { ErrorBoundary } from "./components/ErrorBoundary";

export function App() {
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
    <Div_Wrapper>
      <ErrorBoundary
        fallback={
          <Fallback>
            Ooops...Looks like we are having some issues to display this page.
            <br /> If you are developer check the console.
          </Fallback>
        }
      >
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
      </ErrorBoundary>
    </Div_Wrapper>
  );
}

const Div_Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Fallback = styled.p`
  color: white;
`;
