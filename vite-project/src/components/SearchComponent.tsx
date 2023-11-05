import { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";

type SearchComponentProps = {
  value: string;
  onChange: (value: string) => void;
  handleClick: () => void;
};

export function SearchComponent(props: SearchComponentProps) {
  const [isError, setIsError] = useState(false);

  const showFallback = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error("This is a test error");
  }

  return (
    <Div className="flex-wrapper">
      <Input
        type="text"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
      <Button onClick={props.handleClick}>Search by name</Button>
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
