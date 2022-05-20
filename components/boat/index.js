// Import ship data
import data from "./data.json"

// Boat Class for static functions
class Boat {
  // Position boat function
  // find boat
  // position it top
  // position it left
  // set the boat direction
  static position(selector, top, left, direction) {
    const boat = document.querySelector(selector)
    boat.style.top = `${Math.round(top) * 40}px`
    boat.style.left = `${Math.round(left * 40)}px`

    if (direction === 'n') {
      boat.style.transform = 'rotate(0deg)'
    } else if (direction === 'e') {
      boat.style.transform = 'rotate(90deg)'
    } else if (direction === 's') {
      boat.style.transform = 'rotate(180deg)'
    } else if (direction === 'w') {
      boat.style.transform = 'rotate(270deg)'
    }
  }

  // Set local storage
  // Set boat position after compleation
  static setLocalStorage(name, arr) {
    localStorage.setItem(name, JSON.stringify(arr));
  }

  // Get local storage
  // Retrieve boat location
  static getLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name));
  }
}

// Sweet run button
const runBtn = document.querySelector('.js-run')

// Attach event listener to button
// Disable after interaction
runBtn.addEventListener('click', () => {
  runBtn
    .classList
    .add('is-disabled')

  runBtn.setAttribute('disabled', '')
  runBtn.setAttribute('aria', 'hidden')
  runBtn.innerHTML = 'Mapping!'

  // Loop though the ships in data.json
  data.forEach((item, itemIndex) => {

    // Create a place to store
    // Name
    // Selector
    // Position Top
    // Position Left
    // Direction
    const store = {
      name: item.name,
      selector: `.js-boat${itemIndex}`,
      top: item.location[0],
      left: item.location[1],
      direction: item.direction
        .toLowerCase()
    }

    // Create the boat element
    // Add to the dom
    const boat = document.createElement('div')
    boat.className = `boat js-boat${itemIndex}`
    boat.setAttribute('aria-label', item.name)
    document.querySelector('.js-map').appendChild(boat)

    // Call the static Boat position function
    // Move the boat into start position
    Boat.position(
      store.selector,
      store.top,
      store.left,
      store.direction
    )

    // Get instructions from data
    // Lowercase it
    // Trim and replace whitespaces
    // Split it into an array
    // Run foreach on it
    item.instructions
      .toLowerCase()
      .trim()
      .replace(/\s/g,'')
      .split('')
      .forEach((instruction, instructionIndex) => {
        setTimeout(() => {
          // ALL THE IF STATEMENT BEST!!
          // Push new vals to the store
          if (instruction === 'l') {
            if (store.direction === 'n') {
              store.direction = 'w'
            } else if (store.direction === 'w') {
              store.direction = 's'
            } else if (store.direction === 's') {
              store.direction = 'e'
            } else if (store.direction === 'e') {
              store.direction = 'n'
            }
          }

          if (instruction === 'r') {
            if (store.direction === 'n') {
              store.direction = 'e'
            } else if (store.direction === 'e') {
              store.direction = 's'
            } else if (store.direction === 's') {
              store.direction = 'w'
            } else if (store.direction === 'w') {
              store.direction = 'n'
            }
          }

          if (instruction === 'f') {
            if (store.direction === 'n') {
              store.top += -1
            } else if (store.direction === 'w') {
              store.left += -1
            } else if (store.direction === 's') {
              store.top += 1
            } else if (store.direction === 'e') {
              store.left += 1
            }
          }

          // Re position boat
          Boat.position(
            store.selector,
            store.top,
            store.left,
            store.direction
          )
        }, 1000 * (instructionIndex + 1)); // timer increased 1s each time till end + 1 for zero index

      })

      setTimeout(() => {
        // Get local storage
        const ls = Boat.getLocalStorage('results')

        // If exisits
        // Push store
        // Else create an array with the store values
        if (ls) {
          ls.push(store)
          Boat.setLocalStorage(
            'results',
            ls
          )
        } else {
          Boat.setLocalStorage(
            'results',
            [
              store
            ]
          )
        }
      }, 1000 * (item.instructions.length + 1)); // Time out the length of the instructions
  })

  // Set an intival to watch when all boats have finished
  let interval

  // Function the interval fires every 1s
  function showResults() {
    // Get local storage
    const getResults = Boat.getLocalStorage('results')

    // If ls length === data length then show results
    if (getResults && getResults.length >= data.length) {
      // Get from Localstorage mapdata
      const mapData = Boat.getLocalStorage('mapDetails')

      // Create a ul
      const ul = document.createElement('ul')

      // Loop results
      getResults.forEach(result => {
        // Create li
        const li = document.createElement('li')

        // Set li content
        // If Boat goes out side the bounds i.e -1 it's lost
        // If Boat position left greater than map bounds it's lost
        // If Boat position top greater than map bounds it's lost
        li.innerHTML = `
          <strong>Name</strong>: ${result.name}<br>
          <strong>Location</strong>: ${result.top} ${result.left}<br>
          <strong>Direction</strong>: ${result.direction.toUpperCase()}
          ${result.left < 0 || result.left > mapData.width || result.top < 0 || result.top > mapData.height ? '<br><strong>Warning!</strong>: Lost' : ''}
        `

        // Append it to ul
        ul.appendChild(li)
      })

      // Create results div
      const results = document.createElement('div')
      // Add a class name
      results.className = `content results js-results`
      // Append ul to results
      results.appendChild(ul)
      // Add to dom
      document.querySelector('.js-componentResults').appendChild(results)

      // Clear the interval
      clearInterval(interval);

      // I LOVE A SET TIME OUT!!!
      setTimeout(() => {
        // Add class is-active to the end
        document.querySelector('.js-results').classList.add('is-active')
      }, 1000);
    }
  }

  // Init interval
  interval = setInterval(showResults, 1000)
})
