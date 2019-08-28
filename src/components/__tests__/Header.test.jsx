import React from "react";
import { render } from "@testing-library/react";
import Header from "../Header";

describe("<Header />", () => {
  it("shows the header title correctly", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Hacker News")).toBeInTheDocument();
  });
});
