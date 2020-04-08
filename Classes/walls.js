var Wall = function(){
	this.collision = true
	this.content='wall'
	this.color = "#CCCCCC"
	
	this.draw = function(x, y, px, py){
		var img = document.getElementById("wallImg");
		ctx.drawImage(img, x-px, y-py);
	}
}

Wall.prototype = new Particle();