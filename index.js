const ctx = document.getElementById("game").getContext("2d")
const WIDTH = 640
const HEIGHT = 480

function main () {
	mainMenu()
}

function mainMenu() {
	ctx.font = "48px Sans Serif"
	ctx.textAlign = "center"
	ctx.fillStyle = "white"
	let bg = new Image()
	bg.src = `./bg/menu/${Math.floor(Math.random() * 3)}.png`
	ctx.drawImage(bg, 0, 0, WIDTH, HEIGHT)
	ctx.fillText("OpenTD", WIDTH/2, 80)
}

main()
