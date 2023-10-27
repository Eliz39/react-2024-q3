import { Component } from "react";
import styled from "styled-components";
import { style } from "../styles/styleVariables";
import { CardType } from "../types/CardType";

type CardProps = {
  card: CardType;
};

export default class Card extends Component<CardProps> {
  render() {
    return (
      <Div_Card>
        <Img
          src={this.props.card.image}
          alt={`${this.props.card.name} image`}
        />
        <P_Name>{this.props.card.name}</P_Name>
        <Div_Info>
          <p>Status: {this.props.card.status}</p>
          <p>Species: {this.props.card.species}</p>
          <p>Gender: {this.props.card.gender}</p>
          <p>Location: {this.props.card.location.name}</p>
        </Div_Info>
      </Div_Card>
    );
  }
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
