import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders 'Greetings' as text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //..nothing

    //Assert
    const result = screen.getByText("Greetings", { exact: false });
    expect(result).toBeInTheDocument();
  });
  test("renders nice to meet you all as text", () => {
    render(<Greeting />);

    const result = screen.getByText("Nice to meet you all", { exact: false });
    expect(result).toBeInTheDocument();
  });
  test('renders "changed" if button is clicked', () => {
    //Assert
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });
});
