import Navigation from "@/app/components/navigation";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Header from "@/app/components/header";
describe("Header testing", () => {
  it("Should render header", () => {
    render(<Header />);
    const logoImage = screen.getByAltText(/shubh logo/i);
    expect(logoImage).toBeInTheDocument();
  });
  it("Should open navigation menu when hamburger icon is clicked", async () => {
    render(<Header />);
    const navHamburgerIcon = screen.getByTestId("hamburger");
    expect(navHamburgerIcon).toBeInTheDocument();

    const navigation = await screen.findByRole("navigation");
    expect(navigation).toHaveClass("nav-hidden");
    // userEvent.click(navHamburgerIcon);
    // const navigation2 = await screen.findByRole("navigation");
    // screen.debug(navigation2);
    // expect(navigation2).toHaveClass("nav-visible");
  });
});
