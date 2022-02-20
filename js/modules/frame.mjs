import gather from "./gather-html.mjs"
console.log(gather.head)
const headElem = document.querySelector("head")
const module = document.createElement("script")
module.setAttribute("type", "module")
module.setAttribute("src", "js/modules/gather-html.mjs")
headElem.append(module)

const bodyElem = document.querySelector("body")
const headerDiv = document.createElement("div")
const footerDiv = document.createElement("div")
headerDiv.innerHTML = gather.head
footerDiv.innerHTML = gather.foot
bodyElem.prepend(headerDiv)
bodyElem.append(footerDiv)