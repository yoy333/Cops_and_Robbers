var Particle = function(){
	this.x_pos
	this.y_pos
	
	this.spawn = function(x,y){
		this.x_pos = x
		this.y_pos = y
	}
	
	this.draw = function(x, y, px, py){
		ctx.fillStyle = this.color
		ctx.fillRect(x-px, y-py, 50, 50)
	}
	
	this.constant = function(){
		
	}
}