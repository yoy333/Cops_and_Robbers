var levelObj = []
var playerA = []
var gemA = []
var wallsA = []
var guardA = []
var playerX
var playerY
var gemS
var level = 1;
var currentLevelA = [];
var guard_directions = []
var nodeSize=50;
var camera_pos = {
	x: 0,
	y: 0
}

var custom = false
function animate(){
	//The array of players
	playerA[0].constant()
	for(var i = 0; i < currentLevelA[0].length; i++) {
		for(var j = 0; j < currentLevelA.length; j++) {
			
			if(currentLevelA[j][i]!=0){
				currentLevelA[j][i].constant()
			}
			
		}
	}
	
	draw()
	if(playerA[0].hasWon==false){
		requestAnimationFrame(animate)
	}
}

function levelArrayIter() {
	if(!custom){
		currentLevelA = levelA[level-1]
	}
	for(var i = 0; i < currentLevelA[0].length; i++) {
		for(var j = 0; j < currentLevelA.length; j++) {
			
			var top = j*nodeSize
			var left = i*nodeSize
			
			if(currentLevelA[j][i]!=0){
				currentLevelA[j][i].spawn(left, top)
			}
			
		}
	}
}

function play(){
	
	playerA.push(new Player(100, 100))
	playerA[0].spawn()
	levelArrayIter();
	animate()
	
}

function draw(){
	ctx.fillStyle = "#0000FF"
	ctx.fillRect(0, 0, 1000, 600)
	ctx.fillStyle = "#FFFFFF"
	ctx.fillRect(playerA[0].x_pos - playerA[0].camera_pos.x, playerA[0].y_pos - playerA[0].camera_pos.y, 50, 50)
	for(var i=0; i<currentLevelA.length; i++){
		for(var j=0; j<currentLevelA[i].length; j++){
			var left = currentLevelA[i][j].x_pos
			var top = currentLevelA[i][j].y_pos
			if(currentLevelA[i][j]!=0){
				currentLevelA[i][j].draw(left, top, playerA[0].camera_pos.x, playerA[0].camera_pos.y)
			}
		}
	}
	
	ctx.fillStyle = "#FF8800"
	ctx.fillRect(0, 580, playerA[0].stamina/2, 20)
}

$(document).on("click", "button#level-1", function(){
	$('div#levelScreen').hide();
	play();
})

$(document).on("click",'button#playButton',function(){
	$('button').hide()
	$('div#levelScreen').show()
	$('div#levelScreen>button').show()
})

//start code

$(document).ready(function(){
	$('div#editScreen').hide()
	$('div#guardMenu').hide()
	$('div#levelScreen').hide()
	ctx.fillStyle = "#0000FF"
	ctx.fillRect(0,0,1000,600)
})