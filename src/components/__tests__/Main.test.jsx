import React from "react";
import { render } from "@testing-library/react";
import Main from "../Main";

const stories = [{ id: 1, title: "ABC" }, { id: 2, title: "123" }];

describe("<Main />", () => {
  it("shows the header title correctly", () => {
    const { getByTestId } = render(<Main stories={stories} />);
    const newsList = getByTestId("news-list");
    expect(newsList.children.length).toEqual(2);
  });
});
