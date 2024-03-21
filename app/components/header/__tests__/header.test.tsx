import Navigation from "@/app/components/header/navigation";
import { queryByRole, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Header from "@/app/components/header";
describe("Header testing", () => {
  it("Should render header", () => {
    render(<Header />);
    const logoImage = screen.getByAltText(/shubh logo/i);
    expect(logoImage).toBeInTheDocument();
  });
  it("Should open navigation menu when hamburger icon is clicked and close when clicked again", async () => {
    render(<Header />);
    const navHamburgerIcon = screen.getByTestId("hamburger");
    expect(navHamburgerIcon).toBeInTheDocument();

    var navigation = screen.queryByRole("navigation");
    expect(navigation).not.toBeInTheDocument();
    await userEvent.click(navHamburgerIcon);
    navigation = await screen.findByRole("navigation");
    expect(navigation).toBeInTheDocument();

    await userEvent.click(navHamburgerIcon);
    navigation = screen.queryByRole("navigation");
    expect(navigation).not.toBeInTheDocument();
  });
  it("Should open navigation menu when hamburger icon is clicked and close when clicked again", async () => {
    const navigationElement = () => {
      return screen.queryByRole("navigation");
    };
    //
    render(<Header />);
    const navHamburgerIcon = screen.getByTestId("hamburger");
    expect(navHamburgerIcon).toBeInTheDocument();

    expect(navigationElement()).not.toBeInTheDocument();
    userEvent.click(navHamburgerIcon);
    await waitFor(() => {
      expect(navigationElement()).toBeInTheDocument();
    });

    userEvent.click(navHamburgerIcon);
    await waitFor(() => {
      expect(navigationElement()).not.toBeInTheDocument();
    });
  });
});
