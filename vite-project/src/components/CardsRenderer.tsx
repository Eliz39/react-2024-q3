import { Component } from "react";
import { CardType } from "../types/CardType";
import Card from "./Card";

type CardsRendererProps = {
  cardsArr: CardType[];
};

export class CardsRenderer extends Component<CardsRendererProps> {
  render() {
    return (
      <>
        {this.props.cardsArr.map((card) => {
          return (
            <div key={card.id}>
              <Card card={card} />
            </div>
          );
        })}
      </>
    );
  }
}
