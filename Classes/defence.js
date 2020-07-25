var Defence = function(){
	this.dir_num = 0
	this.orientation = []
	this.orientation = []
	
	this.walkTo = function(coords){
		if( Math.abs( coords[0] - this.x_pos ) <= this.patrolspeed){
			this.x_pos += coords[0] - this.x_pos
			if(coords[0]-this.x_pos>0){
				this.orientation.push('right')
			}else if(coords[0]-this.x_pos<0){
				this.orientation.push('left')
			}
		}else{
			this.x_pos += ( ( Math.abs(coords[0] - this.x_pos ) ) / ( coords[0] - this.x_pos ) ) * this.patrolspeed
			if(coords[0]-this.x_pos>0){
				this.orientation.push('right')
			}else if(coords[0]-this.x_pos<0){
				this.orientation.push('left')
			}
		}
		if( Math.abs( coords[1] - this.y_pos ) <= this.patrolspeed){
			this.y_pos += coords[1] - this.y_pos
		}else{
			this.y_pos += ( ( Math.abs(coords[1] - this.y_pos ) ) / ( coords[1] - this.y_pos ) ) * this.patrolspeed
		}
	}
	
	this.patrol = function(){
		if(this.x_pos == this.direct[ this.dir_num ][ 0 ] && this.y_pos==this.direct[ this.dir_num ][ 1 ]){
			this.dir_num++
			this.coords = this.direct[this.directNum]
			if(this.dir_num>=this.direct.length){
				this.dir_num=0
			}
		}else{
			this.walkTo(this.direct[this.dir_num])
		}
	}
	
	this.chase = function(){
		// console.log('calling Astar')
		
	}
	
	this.detect = function(){
		if(this.orientation[0] == 'right'){
			for(var i=-1; i<=1; i++){
				this.range = 250
				for(var c=1; c<=5; c++){
					this.pos = [Math.floor(this.y_pos/50+i),Math.floor(this.x_pos/50+c)<40?Math.floor(this.x_pos/50+c):39]
					if(currentLevelA[this.pos[0]][this.pos[1]]!=0){
						if(currentLevelA[this.pos[0]][this.pos[1]].content == 'wall'){
							// console.log('short range')
							this.range = currentLevelA[this.pos[0]][this.pos[1]].x_pos-this.x_pos;
							break;	
						}
					}
				}
				if(playerA[0].y_pos+50 >= this.y_pos+(i*50) && playerA[0].y_pos <= (this.y_pos)+(i*50) && playerA[0].x_pos >= this.x_pos+50 && playerA[0].x_pos <= (this.x_pos+this.range)){
					return true
				}
			}
		}
		if(this.orientation[0] == 'left'){
			for(var i=-1;i<=1;i++){
				this.range = -250
				for(var c=0; c<5; c++){
					this.pos = [Math.floor(this.y_pos/50+i), Math.floor((this.x_pos/50))-c>0?Math.floor((this.x_pos/50))-c:0]
					if(currentLevelA[this.pos[0]][this.pos[1]]!=0){
						if(currentLevelA[this.pos[0]][this.pos[1]].content == 'wall'){
							// console.log('short range')
							this.range = currentLevelA[this.pos[0]][this.pos[1]].x_pos-this.x_pos;
							break;	
						}
					}
				}
				if(playerA[0].y_pos >= this.y_pos+(i*50) && playerA[0].y_pos <= (this.y_pos+50)+(i*50) && playerA[0].x_pos <= this.x_pos && playerA[0].x_pos >= (this.x_pos+this.range)){
					return true
				}
			}
		}
		return false
	}
	
	this.run = function(){
		this.patrol()
		if(this.detect()){
			this.chase()
		}
		this.orientation = []
	}
}

Defence.prototype = new Particle()