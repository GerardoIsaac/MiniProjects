const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#1a8fff',  '#ffceff', '#e67e22', '#1fff3f', '#ffff55', '#fff', '#2fc', '#58ffff'];
const SQUARES = 2000;

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
    
    container.appendChild(square)
}

const setColor = (element) => {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

const removeColor = (element) => {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}