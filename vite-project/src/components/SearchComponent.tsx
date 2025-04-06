import { useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { setSearchTerm } from "../redux/slices/searchComponentSlice";
import { searchCharacter } from "../utils/api";
import {
  receivedCards,
  setPages,
  setIsLoading,
} from "../redux/slices/cardsRendererSlice";

import { Button } from "./Button";

export function SearchComponent() {
  const dispatch = useAppDispatch();

  const [isError, setIsError] = useState(false);
  const { searchTerm } = useAppSelector((state) => state.searchComponent);

  const showFallback = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error("This is a test error");
  }

  const handleChange = (value: string) => {
    dispatch(setSearchTerm(value));
    localStorage.setItem("searchTerm", value);
  };

  const handleClick = async () => {
    const queryParam = searchTerm.trim().toLowerCase();
    const data = await searchCharacter(queryParam);

    if (data) {
      dispatch(receivedCards(data.results));
      dispatch(setPages(data.info.pages));
    }
    dispatch(setIsLoading(false));
  };

  return (
    <Div className="flex-wrapper">
      <Input
        type="text"
        value={searchTerm}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Button onClick={handleClick}>Search by name</Button>
      <Button onClick={showFallback} style={{ background: "#f59999" }}>
        Create error
      </Button>
    </Div>
  );
}

const Div = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 5px;
`;

const Input = styled.input`
  max-width: 400px;
  width: 100%;

  color: white;
  font-size: 1.5em;

  border: 0;
  outline: none;
  background: 0;
  border-bottom: 2px solid #bdc3c7;
`;
