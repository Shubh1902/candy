import { render } from "@testing-library/react";
import Products from "../page";

describe("Product tests", () => {
  it("Should get data from api", () => {
    render(<Products />);
  });
});
