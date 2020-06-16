let lastRenderTime = 0
const SNAKE_SPEED = 1

function gameSpeed (currentTime){
    window.requestAnimationFrame(gameSpeed)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    
    lastRenderTime = currentTime
    console.log('Render')
}


window.requestAnimationFrame(gameSpeed)