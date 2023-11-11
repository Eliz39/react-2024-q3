import styled from "styled-components";
import { Link } from "react-router-dom";
import { CardType } from "../types/CardType";
import { Card } from "./Card";
import { Pagination } from "../pages/main/Pagination";

type CardsRendererProps = {
  cardsArr: CardType[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pages: number;
};

export function CardsRenderer(props: CardsRendererProps) {
  return (
    <div>
      <Div_CardsWrapper>
        {props.cardsArr.map((card) => {
          return (
            <Div_CardWrapper key={card.id}>
              <Link to={`modal?page=${props.currentPage}&details=${card.id}`}>
                <Card card={card} />
              </Link>
            </Div_CardWrapper>
          );
        })}
      </Div_CardsWrapper>

      <Pagination
        currentPage={props.currentPage}
        setCurrentPage={props.setCurrentPage}
        totalPages={props.pages}
      />
    </div>
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
