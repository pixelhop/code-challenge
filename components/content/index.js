// Get data
import data from "./data.json"

// Create content div
const content = document.createElement('div')
// Assign class
content.className = 'content is-center'

// Add jazz to content
content.innerHTML = `
  <h1>${data[0].title}</h1>
  <p>${data[0].body}</p>
  <span class="btn">
    <button class="btn__default is-primary js-run">${data[0].btn}</button>
  </span>
`
// Add content to dom
document.querySelector('.js-componentContent').appendChild(content)
