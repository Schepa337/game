const board = document.querySelector('#board')
const colors = ['#008000', '#C71585', '##FF8C00', '#FFFF00', '#48D1CC', '#0000CD', '#191970', '#FF00FF', '#8A2BE2', '#4B0082', '#00FFFF']
const SQUARES_NUMBERS = 1000

for (let i = 0; i < SQUARES_NUMBERS; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor ()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}