import React from "react";

const Main = ({ stories }) => (
  <div className="main">
    <ol data-testid="news-list">
      {stories.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ol>
  </div>
);

export default Main;
