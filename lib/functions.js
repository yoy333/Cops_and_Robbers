var c = document.getElementById("screen");
var ctx = c.getContext("2d");

function getRotationDegrees(obj) {
	if(obj.length){
		var matrix = obj.css("-webkit-transform") ||
		obj.css("-moz-transform")    ||
		obj.css("-ms-transform")     ||
		obj.css("-o-transform")      ||
		obj.css("transform");
		if(matrix !== 'none' && matrix.split('(').length>1) {
		  var values = matrix.split('(')[1].split(')')[0].split(',');
		  var a = values[0];
		  var b = values[1];
		  var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
		} else { var angle = 0; }
		return (angle < 0) ? angle +=360 : angle;
	
	}else{
		return ''
	}
    
	
}

function getpos(entity){

	var pos = new Object();
	pos['width'] = parseInt( $(entity).css('width') );
	pos['height'] = parseInt( $(entity).css('height') );
	pos['top'] = parseInt( $(entity).css('top') );
	pos['left'] = parseInt( $(entity).css('left') );
	pos['right'] = pos['left'] + pos['width'];
	pos['bottom'] = pos['top'] + pos['height'];
	pos['rotation'] = getRotationDegrees($(entity));
	return pos;
	
}

function isbetween(sharkDu1, sharkDu2, boatDu){
	if(sharkDu1<=boatDu&&sharkDu2>=boatDu){
		return true
	
	}else
	{
		return false
	}
}

function rand(min,max){
	var num = Math.floor(Math.random()*(max-min+1)+min)
	return num
}
function randCol(){
	var r = rand(0,255)
	var g = rand(0,255)
	var b = rand(0,255)
	return 'rgb('+r+','+g+','+b+')'
}
function touching(sharkDude, boatDude){
	var shark = getpos(sharkDude)
	var boat = getpos(boatDude)
	
	var ht1 = isbetween(shark.left, shark.right, boat.left);
	var ht2 = isbetween(shark.left, shark.right, boat.right);
	var vt1 = isbetween(shark.top, shark.bottom, boat.top);
	var vt2 = isbetween(shark.top, shark.bottom, boat.bottom);
	
	var ht3 = isbetween(boat.left, boat.right, shark.left);
	var ht4 = isbetween(boat.left, boat.right, shark.right);
	var vt3 = isbetween(boat.top, boat.bottom, shark.top);
	var vt4 = isbetween(boat.top, boat.bottom, shark.bottom);
	
	var ht
	if(ht1||ht2||ht3||ht4){	
		ht = true
		
	}
	var vt
	if(vt1||vt2||vt3||vt4){
		vt = true
		
	}
	
	if(ht&&vt){
		return true;
	}
	else{
		return false;
	}
}
function canvasTouching(x, y, X, Y, w, h, W, H){
	var r = x + w
	var R = X + W
	var b = y + h
	var B = Y + H

	var ht1 = isbetween(x, r, X);
	var ht2 = isbetween(x, r, R);
	var vt1 = isbetween(y, b, Y);
	var vt2 = isbetween(y, b, B);
	
	var ht3 = isbetween(X, R, x);
	var ht4 = isbetween(X, R, r);
	var vt3 = isbetween(Y, B, y);
	var vt4 = isbetween(Y, B, b);
	
	var ht
	if(ht1||ht2||ht3||ht4){	
		ht = true
		
	}
	var vt
	if(vt1||vt2||vt3||vt4){
		vt = true
		
	}
	
	if(ht&&vt){
		return true;
	}
	else{
		return false;
	}
}
function willTouch(sharkDude, boatDude){
	var shark = getpos(sharkDude)
	var boat = getpos(boatDude)
	shark.left += horizontalMomentum
	shark.top += verticleMomentum
	
	var ht1 = isbetween(shark.left, shark.right, boat.left);
	var ht2 = isbetween(shark.left, shark.right, boat.right);
	var vt1 = isbetween(shark.top, shark.bottom, boat.top);
	var vt2 = isbetween(shark.top, shark.bottom, boat.bottom);
	
	var ht3 = isbetween(boat.left, boat.right, shark.left);
	var ht4 = isbetween(boat.left, boat.right, shark.right);
	var vt3 = isbetween(boat.top, boat.bottom, shark.top);
	var vt4 = isbetween(boat.top, boat.bottom, shark.bottom);
	
	var ht
	if(ht1||ht2||ht3||ht4){	
		ht = true
		
	}
	var vt
	if(vt1||vt2||vt3||vt4){
		vt = true
		
	}
	
	if(ht&&vt){
		return true;
	}
	else{
		return false;
	}
}
function  stageMaker(top,left,height,width){
		var value = '<div class="stage" style="top:'+top+'px; left:'+left+'px; height:'+height+'px; width:'+width+'px;"></div>'
    return value
}
function spikeMaker(top, left, height, width){
		var value = '<div class="spike stage" style="top:'+top+'px; left:'+left+'px;height:'+height+'px;width:'+width+'px;"></div>'
    return value
}