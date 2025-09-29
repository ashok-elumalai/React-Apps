import React from "react";
import ReactDOM from "react-dom/client";

/**
 * ReactElement is an object that converts to HTML -> that browser understands
 * ReactElement(Object) => HTML(browser understands)
 */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child-1" }, [
    React.createElement("h1", { key: "ch1-11" }, "I'm child1 H1 tag"),
    React.createElement("h2", { key: "ch1-12" }, "I'm child1 H2 tag"),
  ]),
  React.createElement("div", { id: "child2", key: "child-2" }, [
    React.createElement("h1", { key: "ch1-21" }, "I'm child2 H1 tag"),
    React.createElement("h2", { key: "ch1-22" }, "I'm child2 H2 tag"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
