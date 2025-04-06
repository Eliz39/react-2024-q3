import styled from "styled-components";
import { Link } from "react-router-dom";
import { setCurrentPage } from "../../redux/slices/cardsRendererSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export function Pagination() {
  const dispatch = useAppDispatch();

  const { pages, currentPage } = useAppSelector((state) => state.cardsRenderer);

  const handlePrevClick = () => setCurrentPage(Math.max(currentPage - 1, 1));
  const handleNextClick = () =>
    dispatch(setCurrentPage(Math.min(currentPage + 1, pages)));

  return (
    <Div_Pagination>
      <Link to={`/?page=${currentPage - 1}`}>
        <Button_Pagination
          onClick={handlePrevClick}
          disabled={currentPage === 1}
        >
          &lt;
        </Button_Pagination>
      </Link>
      <p>{currentPage}</p>
      <Link to={`/?page=${currentPage + 1}`}>
        <Button_Pagination
          onClick={handleNextClick}
          disabled={currentPage >= pages}
        >
          &gt;
        </Button_Pagination>
      </Link>
    </Div_Pagination>
  );
}

const Div_Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  color: #ffa42f;
  font-size: 24px;
`;

const Button_Pagination = styled.button`
  width: 50px;
  height: 50px;

  color: #ffa42f;
  font-size: 24px;

  outline: none;
  background: transparent;
  border-radius: 10px;
`;
