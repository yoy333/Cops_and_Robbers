var particleA = []
var levelGuardDirections
var selectedGuard = []
var selectedDirections = []
var saveTo = 1
for(var y=0; y<20; y++){
	particleA.push([])
	for(var x=0; x<40; x++){
		particleA[y].push(0)
	}
}

$(document).on("click", 'button#emptyButton', function(){
	saveTo = ''
})

$(document).on("click", 'button#wallButton', function(){
	saveTo = 'wall'
})

$(document).on("click", 'button#guardButton', function(){
	saveTo = 'guard'
})

$(document).on("click", 'button#gemButton', function(){
	saveTo = 'gem'
})

$(document).on("click", "button#gCheckpointButton", function(){
	saveTo = 'checkpoint'
})

function objectToNumberConversion(){
	for(var c=0; c<particleA.length; c++){
		currentLevelA.push([])
		for(var i=0; i<particleA[0].length; i++){
			currentLevelA[c].push(particleA[c][i].content)
		}
		// console.log is for debuging
		console.log(currentLevelA[c])
	}
}

function classChange(x,y,type){
	switch(type){
		case '':	
			$('div.editorNode#p_'+x+'_'+y).css('backgroundColor', '#0000FF');
			particleA[y][x]=0;
			$('div#p_'+x+'_'+y).removeClass('guard')
			selectedguard = []
		break;
		case 'wall':
			$('div#p_'+x+'_'+y).css('background-image', 'url(img/wall.png)');
			particleA[y][x] = new Wall();
			$('div#p_'+x+'_'+y).removeClass('guard')
			selectedGuard = []
		break;
		case 'gem':
			$('div#p_'+x+'_'+y).css('background-image', 'url(img/gem.png)')
			particleA[y][x] = new Gem();
			$('div#p_'+x+'_'+y).removeClass('guard')
			selectedGuard = []
		break;
		case 'guard':
			$('div#p_'+x+'_'+y).css('backgroundColor', 'black');
			$('div.guard').css('backgroundColor', 'grey')
			$('div#p_'+x+'_'+y).addClass('guard')
			$('div#guardMenu').show()
			$('div#normalMenu').hide()
			selectedGuard = [y*1,x*1]
		break;
		case 'checkpoint':
			selectedDirections.push([(x*50),(y*50)])
		break;
	}
}

function levelDraw(){
	for(var y=0; y<20; y++){
		for(var x=0; x<40; x++){
			
			var type = particleA [y] [x] .content
			switch(type){
				case 0:$('div.editorNode#p_'+x+'_'+y).css('backgroundColor', '#0000FF'); break;
				case 1:$('div.editorNode#p_'+x+'_'+y).css('backgroundColor', '#CCCCCC'); break;
			}
		}
	}
}

function levelReturn(){
	return particleA
}
