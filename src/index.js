/** @jsx Alchemy.createElement */
import './styles.css';

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
  <div className="app">
    <h1>Bienvenidos a Alchemy</h1>
    <div className="box">
      <div>
        <p>Mi versión personalizada de</p>
        <p><strong>ReactDom</strong>.</p>
      </div>
      <div>
        <p>La magia de crear elementos con la función</p>
        <p><strong>createElement</strong>.</p>
      </div>
      <div>
        <p>La magia de mostrar elementos en el DOM con la función</p>
        <p><strong>render</strong>.</p>
      </div>
    </div>
  </div>
)

const container = document.getElementById("root")
Alchemy.render(element, container)
