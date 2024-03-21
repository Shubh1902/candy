import { render, screen } from "@testing-library/react";
import Todos from "../page";
import userEvent from "@testing-library/user-event";
describe("Todos test", () => {
  const { findByRole, getByRole, queryAllByRole, queryByRole } = screen;
  it("Should render Add Todo button", () => {
    render(<Todos />);
    const addTodoButton = getByRole("button");
    expect(addTodoButton).toBeInTheDocument();
  });
  it("Should render text input", () => {
    render(<Todos />);
    const inputBox = getByRole("textbox");
    expect(inputBox).toBeInTheDocument();
  });
  it("Should add element to todolist ", async () => {
    render(<Todos />);
    expect(queryByRole("list")).not.toBeInTheDocument();
    const inputBox = getByRole("textbox");
    expect(inputBox).toBeInTheDocument();
    await userEvent.click(inputBox);
    await userEvent.keyboard("Shubhanshu");
    await userEvent.keyboard("{enter}");
    expect(inputBox).toBeEmptyDOMElement();
    expect(inputBox).not.toHaveValue();
    let list = await findByRole("list");
    let listItem = queryByRole("listitem");
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveTextContent("Shubhanshu");

    await userEvent.click(inputBox);
    await userEvent.keyboard("Shanku");
    await userEvent.keyboard("{enter}");
    expect(inputBox).toBeEmptyDOMElement();
    expect(inputBox).not.toHaveValue();
    list = await findByRole("list");
    const listItems = queryAllByRole("listitem");
    expect(listItems).toHaveLength(2);
    expect(listItems[1]).toHaveTextContent("Shanku");
  });
});
