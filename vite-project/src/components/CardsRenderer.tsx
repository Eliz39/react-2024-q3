import { Component } from "react";
import styled from "styled-components";
import { CardType } from "../types/CardType";
import Card from "./Card";

type CardsRendererProps = {
  cardsArr: CardType[];
};

export class CardsRenderer extends Component<CardsRendererProps> {
  render() {
    return (
      <Div_CardsWrapper>
        {this.props.cardsArr.map((card) => {
          return (
            <Div_CardWrapper key={card.id}>
              <Card card={card} />
            </Div_CardWrapper>
          );
        })}
      </Div_CardsWrapper>
    );
  }
}

const Div_CardsWrapper = styled.div`
  margin: 50px;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Div_CardWrapper = styled.div`
  flex: 1;
`;
