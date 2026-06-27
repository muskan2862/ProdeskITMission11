import { render, screen } from "@testing-library/react";
import Card from "../components/Card";

describe("Card Component", () => {
  test("renders card successfully", () => {
    render(
      <Card
        title="React Testing"
        description="Learning Jest"
      />
    );

    expect(screen.getByText("React Testing")).toBeInTheDocument();
  });

  test("renders title and description", () => {
    render(
      <Card
        title="Frontend"
        description="Using RTL"
      />
    );

    expect(screen.getByText("Frontend")).toBeInTheDocument();

    expect(screen.getByText("Using RTL")).toBeInTheDocument();
  });
});