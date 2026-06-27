import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/Counter";

describe("Counter Component", () => {
  test("renders initial count", () => {
    render(<Counter />);

    expect(
      screen.getByTestId("count")
    ).toHaveTextContent("0");
  });

  test("increments count when button is clicked", async () => {
    render(<Counter />);

    const button =
      screen.getByRole("button", {
        name: /increment/i,
      });

    await userEvent.click(button);

    expect(
      screen.getByTestId("count")
    ).toHaveTextContent("1");
  });
});