// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello Ashok, you're lucky!"
// );

/**
 * ReactElement is an object that converts to HTML -> that browser understands
 * ReactElement(Object) => HTML(browser understands)
 */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm child1 H1 tag"),
    React.createElement("h2", {}, "I'm child1 H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm child2 H1 tag"),
    React.createElement("h2", {}, "I'm child2 H2 tag"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
