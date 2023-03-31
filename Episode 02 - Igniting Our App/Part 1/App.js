const parent = React.createElement("div", { id: "parent" }, [
//   console.log(parent)
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag child"),
    React.createElement("h2", {}, "I am h2 tag child"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag of child2"),
    React.createElement("h2", {}, "I am h2 tag of child2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
