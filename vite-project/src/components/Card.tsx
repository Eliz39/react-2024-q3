import { Component } from "react";
import { CardType } from "../types/CardType";

type CardProps = {
  card: CardType;
};

export default class Card extends Component<CardProps> {
  render() {
    return <div>{this.props.card.name}</div>;
  }
}
