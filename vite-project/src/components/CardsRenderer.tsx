import { useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { setCurrentPage } from "../redux/slices/cardsRendererSlice";
import { Card } from "./Card";
import { Pagination } from "../pages/main/Pagination";

export function CardsRenderer() {
  const dispatch = useAppDispatch();

  const { dataArr, currentPage } = useAppSelector(
    (state) => state.cardsRenderer
  );

  const urlParams = new URLSearchParams(useLocation().search);
  const pageParam = Number(urlParams.get("page")) || 1;

  useEffect(() => {
    dispatch(setCurrentPage(pageParam));
  }, []);

  return (
    <div>
      <Div_CardsWrapper>
        {dataArr.map((card) => {
          return (
            <Div_CardWrapper key={card.id}>
              <Link to={`modal?page=${currentPage}&details=${card.id}`}>
                <Card name={card.name} image={card.image} testId="card" />
              </Link>
            </Div_CardWrapper>
          );
        })}
      </Div_CardsWrapper>

      <Pagination />
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
