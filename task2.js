function getRandomInt(max) {
    return Math.round(Math.random() * max)
}

function componentToHex(c) {
    let hex = c.toString(16)
    return hex.length == 1 ? "0" + hex : hex
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

const r = getRandomInt(255)
const g = getRandomInt(255)
const b = getRandomInt(255)

const rgbColor = `RGB(${r}, ${g}, ${b})`
const hexColor = rgbToHex(r, g, b)
const n_match = ntc.name(hexColor)
const colorName = n_match[1]
const shadeName= n_match[3]
const brightness = r + g + b

const textColor = brightness < 382 ? "white" : "black"

const colorBox = document.querySelector('.colorBox')
colorBox.style.backgroundColor = hexColor
colorBox.style.color = textColor
colorBox.innerHTML = `${rgbColor}<br>${hexColor}<br>${shadeName}<br>(${colorName})`