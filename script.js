function handleKeyPress (ev) {
if (ev.code === "Space") {

const player = document.querySelector("#player")
player.setAttribute("cx", 100*Math.random())
player.setAttribute("cy", 100*Math.random())}

else if (ev.key==="r"){
    player.setAttribute("fill", "red")
}
else if (ev.key==="g"){
    player.setAttribute("fill", "green")
}

}


function gameLoop() {

const player = document.querySelector("#player");

let posY = parseInt(player.getAttribute("cy"));

player.setAttribute("cy", posY + 1);




//loop forever
window.requestAnimationFrame(gameLoop);
}

gameLoop()

window.onkeydown = handleKeyPress