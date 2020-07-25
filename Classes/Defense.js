var Defense = function(){
	this.dir_num = 0
	this.orientation = []
	this.map = []
	this.found = false

	this.walkTo = function(coords){
>>>>>>> master
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
			if(coords[1]-this.y_pos>0){
				this.orientation.push('down')
			}else if(coords[1]-this.y_pos<0){
				this.orientation.push('up')
			}
		}else{
			this.y_pos += ( ( Math.abs(coords[1] - this.y_pos ) ) / ( coords[1] - this.y_pos ) ) * this.patrolspeed
			if(coords[1]-this.y_pos>0){
				this.orientation.push('down')
			}else if(coords[1]-this.y_pos<0){
				this.orientation.push('up')
			}
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
	
	this.getAStarMap = function(){
		var map = Object.assign([], currentLevelA)
		var ans = []
		for(var y = 0; y<20; y++){
			ans.push([])
			for(var x = 0; x<40; x++){
				ans[y].push(currentLevelA[y][x].collision?1:0)
			}
		}
		return ans
	}
	
	this.chase = function(){
		var map = this.getAStarMap()
		var path = new AStar([Math.floor(this.x_pos/50), Math.floor(this.y_pos/50)], [Math.floor(playerA[0].x_pos/50), Math.floor(playerA[0].y_pos/50)], map)
		var guide = path.getPath()
		// console.log(guide)
		this.walkTo([guide[1][0]*50, guide[1][1]*50])
	}
	
	this.withinRangeRight = function(i, range){
		// console.log('running')
		var nodeSize = 50

		var playerTop = playerA[0].y_pos
		var playerBottom = playerA[0].y_pos+nodeSize
		var playerLeft = playerA[0].x_pos+nodeSize
		var playerRight = playerA[0].x_pos

		var sightTop = this.y_pos+(i*nodeSize)
		var sightBottom = (this.y_pos)+(i*nodeSize)+nodeSize 
		var sightLeft = this.x_pos+nodeSize
		var sightRight = this.x_pos+range

		if( playerBottom >= sightTop &&
			playerTop    <= sightBottom &&
			playerRight  >= sightLeft &&
			playerLeft   <= sightRight){
			
			return true

		}
	}

	this.detect = function(){
		if(this.orientation[0] == 'right'){
			for(var i=-1; i<=1; i++){
				var range = 250
				for(var c=1; c<=5; c++){
					this.pos = [Math.floor(this.y_pos/50+i),Math.floor(this.x_pos/50+c)<40?Math.floor(this.x_pos/50+c):39]
					if(currentLevelA[this.pos[0]][this.pos[1]]!=0){
						if(currentLevelA[this.pos[0]][this.pos[1]].content == 'wall'){
							range = currentLevelA[this.pos[0]][this.pos[1]].x_pos-this.x_pos;
							break;	
						}
					}
				}
				if(this.withinRangeRight(i, range)){
					this.found = true
]					return true
				}
			}
		}
		if(this.orientation[0] == 'left'){
			for(var i=-1;i<=1;i++){
				range = -250
				for(var c=0; c<5; c++){
					this.pos = [Math.floor(this.y_pos/50+i), Math.floor((this.x_pos/50))-c>0?Math.floor((this.x_pos/50))-c:0]
					if(currentLevelA[this.pos[0]][this.pos[1]]!=0){
						if(currentLevelA[this.pos[0]][this.pos[1]].content == 'wall'){
							// console.log('short range')
							range = currentLevelA[this.pos[0]][this.pos[1]].x_pos-this.x_pos;

							break;	
						}
					}
				}
				// here
			}
		}
		return false
	}
	
	this.run = function(){
		this.patrol()
		this.detect()
		if(this.found){
			this.chase()
		}
		this.orientation = []
	}	
}

Defense.prototype = new Particle()