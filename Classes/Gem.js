var Gem = function(){
	this.collision = false
	this.content = 'gem'
	this.color = "#FF0000"
	
	this.draw = function(x, y, px, py){
		var img = document.getElementById("gemImg");
		ctx.drawImage(img, x-px, y-py);
	}
}

Gem.prototype = new Particle();