import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Pagination } from "../pages/main/Pagination";

test("handles previous and next clicks correctly", () => {
  let currentPage = 3;
  const setCurrentPage = (page: number) => {
    currentPage = page;
  };

  render(
    <Router>
      <Pagination
        currentPage={currentPage}
        totalPages={5}
        setCurrentPage={setCurrentPage}
      />
    </Router>
  );

  expect(screen.getByText("3")).toBeInTheDocument();

  fireEvent.click(screen.getByText(">"));
  expect(currentPage).toBe(4);

  fireEvent.click(screen.getByText("<"));
  expect(currentPage).toBe(2);
});
