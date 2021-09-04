console.log("entré: step two")

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

function render(element, container) {
  const dom = element.type == "TEXT_ELEMENT" 
    ? document.createTextNode("")
    : document.createElement(element.type)

  const isProperty = key => key !== "children"

  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name]
    })

  element.props.children.forEach(child => {
    render(child, dom)
  });

  container.appendChild(dom)
}

const Alchemy = {
  createElement,
  render,
}

const element = Alchemy.createElement(
  "div",
  { id: "foo" },
  Alchemy.createElement("a", null, "bar"),
  Alchemy.createElement("b"),
);

const container = document.getElementById("root")
Alchemy.render(element, container)
