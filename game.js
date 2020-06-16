import { update as updateSnake, draw as drawSnake, snakeSpeed} from './snake.js'
import { update as updateFood, draw as drawFood} from './food.js'


let lastRenderTime = 0
const gameBoard = document.getElementById("game-board")

function gameSpeed (currentTime){
    window.requestAnimationFrame(gameSpeed)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / snakeSpeed) return
    
    lastRenderTime = currentTime
    
    update()
    draw()
}


window.requestAnimationFrame(gameSpeed)


function update() {
    updateSnake()
    updateFood()
}


function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}