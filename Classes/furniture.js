var Furniture = function(){
	this.collision = true
	this.content='furniture'
	this.color = "#B5651D"
  	
	this.hide = function(){
		if(playerA[0].x_pos>=this.x_pos-50&&playerA[0].x_pos<=this.x_pos+50&&playerA[0].y_pos>=this.y_pos-50&&playerA[0].y_pos<=this.y_pos+50&&playerA[0].hiding==false&&keys.e){
			playerA[0].x_pos=this.x_pos
			playerA[0].y_pos=this.y_pos
			playerA[0].hiding = true
		}
	}
	
	this.unhide = function(){
		if(playerA[0].hiding&&keys.e){
			this.collision = false
			playerA[0].hiding = false
		}
		if(!(playerA[0].x_pos>=this.x_pos-50&&playerA[0].x_pos<=this.x_pos+50&&playerA[0].y_pos>=this.y_pos-50&&playerA[0].y_pos<=this.y_pos+50)){
			playerA[0].hiding=false
			this.collision = true
		}
	}
	
	this.constant = function(){
		this.hide()
		this.unhide()
	}

}

Furniture.prototype = new Particle();