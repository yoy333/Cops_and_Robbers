$(document).on("click",'button#editorButton',function(){
	$('canvas').hide()
	$('div#startScreen').hide()
	$('div#editScreen').show()
	for(var y=0; y<20; y++){
		for(var x=0; x<40; x++){
			$('div#editorParent').append('<div id="p_'+(x)+'_'+(y)+'"class="editorNode" data-particle_row="'+(x)+'" data-particle_column="'+(y)+'"></div>')
		}
	}
	levelDraw()
})

$(document).on("click", 'button#saveButton', function(){
	//push guard directions here
	currentLevelA = particleA
	$('canvas').show()
	$('div#startScreen').show()
	$('div#editScreen').hide()
})

$(document).on("click", "button#gSaveButton", function(){
	var y = selectedGuard[0]
	var x = selectedGuard[1]
	var d = selectedDirections
	particleA[y][x] = new Guard(d)
	selectedGuard=[];
	selectedDirections=[];
	$('div#normalMenu').show()
	$('div#guardMenu').hide()
})

$(document).on("click", "button#customLevelButton", function(){
	//objectToNumberConversion()
	custom=true
	$('button').hide()
	play();
})

$(document).on("click", 'div.editorNode', function(){
	var top = $(this).attr('data-particle_row')
	var left = $(this).attr('data-particle_column')
	classChange(top,left,saveTo)	
})