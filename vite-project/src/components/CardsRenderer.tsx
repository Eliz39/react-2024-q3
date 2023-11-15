import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Card } from "./Card";
import { Pagination } from "../pages/main/Pagination";

type CardsRendererProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pages: number;
};

export function CardsRenderer(props: CardsRendererProps) {
  const { dataArr } = useContext(AppContext);
  return (
    <div>
      <Div_CardsWrapper>
        {dataArr.map((card) => {
          return (
            <Div_CardWrapper key={card.id}>
              <Link to={`modal?page=${props.currentPage}&details=${card.id}`}>
                <Card name={card.name} image={card.image} testId="card" />
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
