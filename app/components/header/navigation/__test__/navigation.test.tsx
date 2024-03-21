import Navigation from "@/app/components/header/navigation";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
describe("Navigation testing", () => {
  it("Should render navigation", async () => {
    const mock = jest.fn();
    render(<Navigation open={true} handleClose={mock} />);
    const navigation = screen.getByRole("navigation");
    expect(navigation).toBeInTheDocument();
    const linkItem = screen.queryAllByRole("link");
    expect(linkItem).not.toHaveLength(0);
  });
});
