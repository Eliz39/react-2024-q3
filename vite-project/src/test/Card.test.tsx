import { render, screen } from "@testing-library/react";
import { Card } from "../components/Card";

const card = {
  name: "test-name",
  image: "test-image",
};

test("Render card data", () => {
  render(<Card name={card.name} image={card.image} />);

  const imageElement = screen.getByAltText(/test-name/i);
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute("src", "test-image");
});
