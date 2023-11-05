import styled from "styled-components";
import { CardType } from "../types/CardType";
import { Card } from "./Card";

type CardsRendererProps = {
  cardsArr: CardType[];
};

export function CardsRenderer(props: CardsRendererProps) {
  return (
    <Div_CardsWrapper>
      {props.cardsArr.map((card) => {
        return (
          <Div_CardWrapper key={card.id}>
            <Card card={card} />
          </Div_CardWrapper>
        );
      })}
    </Div_CardsWrapper>
  );
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
