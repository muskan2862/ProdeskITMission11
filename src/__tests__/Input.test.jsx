import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "../components/Input";

describe("Input Component", () => {
  test("renders input field", () => {
    render(<Input placeholder="Enter Name" />);

    expect(
      screen.getByPlaceholderText("Enter Name")
    ).toBeInTheDocument();
  });

  test("updates input value when typing", async () => {
    render(<Input placeholder="Enter Name" />);

    const input =
      screen.getByPlaceholderText("Enter Name");

    await userEvent.type(input, "Muskan");

    expect(input).toHaveValue("Muskan");
  });
});