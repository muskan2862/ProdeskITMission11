import { render, screen } from "@testing-library/react";
import UserList from "../components/UserList";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            id: 1,
            name: "Muskan",
          },
          {
            id: 2,
            name: "Rahul",
          },
        ]),
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("UserList Component", () => {
  test("renders mocked users", async () => {
    render(<UserList />);

    expect(
      await screen.findByText("Muskan")
    ).toBeInTheDocument();

    expect(
      await screen.findByText("Rahul")
    ).toBeInTheDocument();
  });

  test("fetch is called once", async () => {
    render(<UserList />);

    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});