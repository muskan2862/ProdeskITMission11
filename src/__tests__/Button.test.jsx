import { render, screen } from "@testing-library/react";
import Button from "../components/Button";

describe("Button Component", () => {
  test("renders button without crashing", () => {
    render(<Button text="Submit" />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("displays text passed through props", () => {
    render(<Button text="Login" />);

    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});