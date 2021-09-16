/** @jsx Alchemy.createElement */

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

const element = (
  <div>
    <h1>Bienvenidos a Alchemy</h1>
    <ul>
      <li>Mi versión personalizada de ReactDom</li>
      <li>La magia de crear elementos con la función createElement</li>
      <li>La magia de mostrar elementos en el DOM con la función render</li>
    </ul>
  </div>
)

const container = document.getElementById("root")
Alchemy.render(element, container)
