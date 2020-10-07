var Guard = function(directions){
	this.patrolspeed = 3
	this.direct = directions
	this.content='guard'
	this.color = "#000000"
	this.collision = false
	
	this.constant = function(){
		this.run()
	}
}

Guard.prototype = new Defense()