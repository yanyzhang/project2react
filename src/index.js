import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const userName = "Peter Smith";
root.render(
  // <div>
  //   <h2>Main Title</h2>
  //   <h3>Hello Again {userName}</h3>
  //   <p>some text in a paragraph</p>
  // </div>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
