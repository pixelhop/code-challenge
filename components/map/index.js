// Get Map data
import data from "./data.json"

// Clear local storage
localStorage.clear();

// Get Map Options
const mapHeight = (data[0].map[0] + 1) * 40 // + 1 zero based * 40 for ship px size
const mapWidth = (data[0].map[1] + 1) * 40 // + 1 zero based * 40 for ship px size

// Create the map elem
const map = document.createElement('div')

// Add class, js-map so we can put the boat in it
map.className = 'map u-bg-image js-map'

// Set widths and heights
map.style = `
  height: ${mapHeight}px;
  width: ${mapWidth}px;
`

// Add component to dom
document.querySelector('.js-componentMap').appendChild(map)

// Map CLASS static functions
class Map {
  static setLocalStorage(name, arr) {
    localStorage.setItem(name, JSON.stringify(arr));
  }
}

// Set local storage
// Width, Height
Map.setLocalStorage(
  'mapDetails',
  {
    'height': data[0].map[0],
    'width': data[0].map[1]
  }
)
