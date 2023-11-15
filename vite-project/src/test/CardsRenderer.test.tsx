import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CardsRenderer } from "../components/CardsRenderer";
import { AppContext } from "../context/AppContext";
import { CardType } from "../types/CardType";
import { getCharacter } from "../utils/api";

const mockedContext = {
  dataArr: [
    { name: "Summer", image: "test-image" },
    { name: "Rick", image: "rick-image" },
  ] as CardType[],
  searchTerm: "",
  setSearchTerm: () => {},
};

test("Render card list", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <AppContext.Provider value={mockedContext}>
        <CardsRenderer currentPage={1} setCurrentPage={() => {}} pages={10} />
      </AppContext.Provider>
    </MemoryRouter>
  );

  expect(screen.getAllByTestId("card")).toHaveLength(2);
});
