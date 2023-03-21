// const heading = React.createElement("h1", {} , "Welcome to ReactJS");
const heading = React.createElement("h1",{id: "heading"}, "Welcome to ReactJS");
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)