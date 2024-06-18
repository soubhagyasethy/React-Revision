// const heading = document.createElement("h1");
// heading.innerHTML = "Hello from React!";
// const root = document.getElementById("root");
// root.appendChild(heading);

const heading1 = React.createElement(
  "h1",
  {
    id: "heading",
    class: "class",
    style: { color: "red" },
  },
  "Heading 1"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "heading",
    class: "class",
    style: { color: "red" },
  },
  "Heading 2"
);

const heading3 = React.createElement(
  "h3",
  {
    id: "heading",
    class: "class",
    style: { color: "red" },
  },
  "Heading 3"
);

const container = React.createElement(
  "div",
  {
    id: "container",
    class: "container",
    style: { backgroundColor: "yellow" },
  },
  [heading1, heading2, heading3]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
