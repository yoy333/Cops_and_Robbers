var Wall = function(){
	this.collision = true
	this.content='wall'
	this.color = "#CCCCCC"
}

Wall.prototype = new Particle();