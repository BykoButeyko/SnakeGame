let lastRenderTime = 0

function gameSpeed (currentTime){
    window.requestAnimationFrame(gameSpeed);
    lastRenderTime = currentTime
}