import { Component } from "react";
import { SearchComponent } from "./components/SearchComponent";
import { Card } from "./types/CardType";
import { CardsRenderer } from "./components/CardsRenderer";

export class App extends Component {
  state = {
    loading: true,
    dataArr: [] as Card[],
  };

  componentDidMount(): void {
    fetch("https://rickandmortyapi.com/api/character")
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
  }

  render() {
    return (
      <>
        {this.state.loading === false ? (
          <>
            <SearchComponent />
            <CardsRenderer cardsArr={this.state.dataArr} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  }
}
