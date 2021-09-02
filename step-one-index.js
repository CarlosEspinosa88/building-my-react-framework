console.log("entré: step one")

/** @jsx Alchemy.createElement */

// React Code (JSX)

// const element = (
//   <div id="foo">
//     <a>bar</a>
//     <b />
//   </div>
// )
// const container = document.getElementById("root")
// ReactDOM.render(element, container)

// JS code without React
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => (
        typeof child === "object" ? child : createTextElement(child)
      )),
    },
  }
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  }
}

const Alchemy = {
  createElement,
}

const element = Alchemy.createElement(
  "div",
  { id: "foo" },
  Alchemy.createElement("a", null, "bar"),
  Alchemy.createElement("b"),
);
