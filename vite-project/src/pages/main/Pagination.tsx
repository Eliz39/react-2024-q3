import styled from "styled-components";
import { Link } from "react-router-dom";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
};

export function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationProps) {
  const handlePrevClick = () => setCurrentPage(Math.max(currentPage - 1, 1));
  const handleNextClick = () => setCurrentPage(Math.min(currentPage + 1));

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
          disabled={currentPage >= totalPages}
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
