console.log("entré: step zero")

// React Code (JSX)

// const element = <h1 title="foo">Hello</h1>
// const container = document.getElementById("root")
// ReactDOM.render(element, container)


// JS code without React
const element = {
  type: "h1",
  props: {
    title: "Atributo de html tag h1",
    children: "Hola, mundo"
  },
};

const container = document.getElementById("root");

const node = document.createElement(element.type);
node["title"] = element.props.title;

const text = document.createTextNode("");
text["nodeValue"] = element.props.children;

node.appendChild(text);
container.appendChild(node);
