import App from "./App";
import { render, screen } from "@testing-library/react";

describe("Main page", () => {
  it("Should render main page", () => {
    render(<App />);
    expect(screen.getByText("count is 0")).toBeInTheDocument();
  });
});
