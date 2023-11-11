import styled from "styled-components";
import { style } from "../styles/styleVariables";
import { CardType } from "../types/CardType";

type CardProps = {
  card: CardType;
};

export function Card(props: CardProps) {
  return (
    <Div_Card>
      <Img src={props.card.image} alt={`${props.card.name} image`} />
      <P_Name>{props.card.name}</P_Name>
    </Div_Card>
  );
}

const Div_Card = styled.div`
  padding: 15px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  color: ${style.white};

  background: ${style.transparentGray};
  border: 1px solid ${style.gray};
  border-radius: 10px;

  transition: all ease-in-out 0.2s;

  &:hover {
    img {
      transform: scale(1.05);
      transition: all ease-in-out 0.4s;
    }
    color: ${style.orange};
  }
`;
const Img = styled.img`
  margin: 0 auto;

  width: 200px;
  height: 200px;
`;

const P_Name = styled.p`
  margin: 0 auto;

  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
`;
