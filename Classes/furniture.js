var Furniture = function(){
	this.collision = true
	this.content='furniture'
	this.color = "#B5651D"
	this.activePress = false
	
	this.newPress = function(){
		if(keys.e){
			if(!this.activePress){
				this.activePress = true
				return true
			}else{
				return false
			}
		}else{
			this.activePress = false
			return false
		}
	}
 	
	this.hide = function(){
		if(playerA[0].x_pos>=this.x_pos-50&&playerA[0].x_pos<=this.x_pos+50&&playerA[0].y_pos>=this.y_pos-50&&playerA[0].y_pos<=this.y_pos+50&&playerA[0].hiding==false&&this.newPress()){
			playerA[0].x_pos=this.x_pos
			playerA[0].y_pos=this.y_pos
			playerA[0].hiding = true
		}
	}
	
	this.unhide = function(){
		if(playerA[0].hiding&&this.newPress()){
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