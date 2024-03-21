import Navigation from "@/app/components/navigation";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/app/components/header";
describe("Header testing", () => {
  // it("Should render header", () => {
  //   render(<Header />);
  //   // screen.debug();
  //   const logoImage = screen.getByAltText(/shubh logo/i);
  //   expect(logoImage).toBeInTheDocument();
  // });
  it("Should open navigation menu when hamburger icon is clicked", () => {
    render(<Header />);
    const navHamburgerIcon = screen.getByTestId("hamburger");
    expect(navHamburgerIcon).toBeInTheDocument();

    const navigation = screen.getByRole("navigation");
    expect(navigation).toBeInTheDocument();
    screen.debug();
    expect(navigation).not.toBeVisible();

    // fireEvent.click(navHamburgerIcon);

    // expect(navigation).toBeInTheDocument();
    // expect(navigation).toBeVisible();
  });
});
