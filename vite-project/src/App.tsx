import { Component } from "react";
import styled from "styled-components";
import { SearchComponent } from "./components/SearchComponent";
import { CardType } from "./types/CardType";
import { CardsRenderer } from "./components/CardsRenderer";
import { BASE_URL } from "./BASE_URL";
import "./styles/App.css";
import { ErrorBoundary } from "./components/ErrorBoundary";

export class App extends Component {
  state = {
    loading: true,
    dataArr: [] as CardType[],
    searchTerm: localStorage.getItem("searchTerm") ?? "",
  };

  componentDidMount(): void {
    if (!this.state.searchTerm) {
      fetch(BASE_URL)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.setState({
            dataArr: data.results,
          });
        })
        .finally(() => this.setState({ loading: false }));
    } else {
      this.handleClick();
    }
  }

  handleClick = () => {
    const queryParam = this.state.searchTerm.trim().toLowerCase();
    fetch(`${BASE_URL}?name=${queryParam}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        this.setState({
          dataArr: data.results,
        });
      })
      .finally(() => this.setState({ loading: false }));
  };

  handleInputValueChange = (value: string) => {
    this.setState({ searchTerm: value });
    localStorage.setItem("searchTerm", value);
  };

  render() {
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
          {this.state.loading === false ? (
            <>
              <SearchComponent
                value={this.state.searchTerm}
                onChange={(value) => this.handleInputValueChange(value)}
                handleClick={this.handleClick}
              />
              <CardsRenderer cardsArr={this.state.dataArr} />
            </>
          ) : (
            <p>Loading...</p>
          )}
        </ErrorBoundary>
      </Div_Wrapper>
    );
  }
}

const Div_Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Fallback = styled.p`
  color: white;
`;
