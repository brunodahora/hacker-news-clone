import React from "react";
import { render } from "@testing-library/react";
import Main from "../Main";

describe("<Main />", () => {
  it("shows the header title correctly", () => {
    const { getByTestId } = render(<Main />);
    const newsList = getByTestId("news-list");
    expect(newsList.children.length).toEqual(2);
  });
});
