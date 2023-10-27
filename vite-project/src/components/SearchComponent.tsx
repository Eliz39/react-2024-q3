import { Component } from "react";
import styled from "styled-components";
import { Button } from "./Button";

type SearchComponentProps = {
  value: string;
  onChange: (value: string) => void;
  handleClick: () => void;
};

export class SearchComponent extends Component<SearchComponentProps> {
  state = {
    isError: false,
  };

  showFallback = () => {
    this.setState({ isError: true });
  };
  render() {
    if (this.state.isError) {
      throw new Error("This is a test error");
    }
    return (
      <Div className="flex-wrapper">
        <Input
          type="text"
          value={this.props.value}
          onChange={(e) => this.props.onChange(e.target.value)}
        />
        <Button onClick={this.props.handleClick}>Search by name</Button>
        <Button onClick={this.showFallback} style={{ background: "#f59999" }}>
          Create error
        </Button>
      </Div>
    );
  }
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
