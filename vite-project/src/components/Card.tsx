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
      <Div_Info>
        <p>Status: {props.card.status}</p>
        <p>Species: {props.card.species}</p>
        <p>Gender: {props.card.gender}</p>
        <p>Location: {props.card.location.name}</p>
      </Div_Info>
    </Div_Card>
  );
}

const Div_Card = styled.div`
  padding: 15px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  color: white;

  background: #ffffff14;
  border: 1px solid ${style.gray};
  border-radius: 10px;
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

const Div_Info = styled.div``;
