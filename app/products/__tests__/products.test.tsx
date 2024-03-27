import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Products from "@/app/products/page";

describe("Page", () => {
  it("renders a heading", async () => {
    render(<Products />);
    const heading = await screen.findByRole("heading");
    screen.debug();
    expect(heading).toBeInTheDocument();
  });
});
