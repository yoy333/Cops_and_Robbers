var Defense = function(){
	this.dir_num = 0
	this.orientation = []
	this.map = []
	this.found = false
	this.patrolspeed = 3
	this.intermediate = []
	this.lastFoundPos = []
	this.axis = 0
	
	this.setOrientationX = function(x){
		if(x-this.x_pos>0){
			
		}else if(x-this.x_pos<0){
			this.orientation.push('left')
		}
	}
	
	this.setOrientationY = function(y){
		if(y-this.y_pos>0){
			this.orientation.push('down')
		}else if(y-this.y_pos<0){
			this.orientation.push('up')
		}
	}
	
	this.move = function(dx, dy){
		this.x_pos+=dx
		this.y_pos+=dy
	}
	
	this.lineCorrectionsUnit = function(x_mod, y_mod){
		var px = playerA[0].x_pos+x_mod
		var py = playerA[0].y_pos+y_mod
		var gx = this.x_pos+x_mod
		var gy = this.y_pos+y_mod
		var a = px-gx
		var flip = Math.abs(a)/a
		var adjacent = px-gx*flip
		var opposite = py-gy
		var angle = this.findAngle(opposite, adjacent)
		var c = Math.cos(angle)
		var s = Math.sin(angle)
		var hypotenuse = opposite/s
		var ch = 0
		var ca = 0
		var co = 0
		var maxR = hypotenuse<=250?hypotenuse:250
		if(Math.abs(adjacent)>Math.abs(opposite)){
			var factor = 50/adjacent
			var unit = {
				a: 50,
				o: opposite*factor,
				h: hypotenuse*factor
			}
			while(ch<maxR){
				ca += unit.a
				co += unit.o
				ch += unit.h
				var y = Math.floor((co+gy)/50)
				var x = Math.floor(((ca*flip)+gx)/50)
				if(x<0){
					x = 0
				}
				if(y<0){
					y = 0
				}
				if(this.checkIfCollision(x, y)){
					return false
				}
			}
		}
		if(Math.abs(adjacent)<Math.abs(opposite)){
			var factor = 50/opposite
			var unit = {
				a: adjacent*factor,
				o: 50,
				h: hypotenuse*factor
			}
			while(ch<maxR){
				ca += unit.a
				co += unit.o
				ch += unit.h
				var y = Math.floor((co+gy)/50)
				var x = Math.floor(((ca*flip)+gx)/50)			
				if(this.checkIfCollision(x, y)){
					return false
				}
			}
			if(ch>maxR){
				return true
			}
		}
		return false	
	}
	
	this.lineCorrections = function(dx, dy){
		if(dx==0&&dy==0){
			var tl = this.lineCorrectionsUnit(0  ,0)
			var tr = this.lineCorrectionsUnit(50 ,0)
			var bl = this.lineCorrectionsUnit(0  ,50)
			var br = this.lineCorrectionsUnit(50 ,50)
			console.log([tr, tl, br, bl])
			if(!(tl||tr)){
				var y_ceil = (Math.ceil(this.y_pos/50)*50)+3
				this.intermediate = [this.x_pos, y_ceil]
				this.axis = 1
				dy = 3
			}if(!(tr||br)){
				var x_ceil = (Math.floor(this.x_pos/50)*50)-3
				this.intermediate = [x_ceil, this.y_pos]
				this.axis = -1
				dx = -3
			}if(!(br||bl)){
				var y_ceil = (Math.floor(this.y_pos/50)*50)-3
				this.intermediate = [this.x_pos, y_ceil]
				this.axis = 1
				dy = -3
			}if(!(bl||tl)){
				var x_ceil = (Math.ceil(this.x_pos/50)*50)+3
				this.intermediate = [x_ceil, this.y_pos]
				this.axis = -1
				dx = 3
			}
		}
		this.move(dx, dy)
	}
	
	this.walkToXAxis = function(x, y){
		var dx = x-this.x_pos
		var dy = this.y_pos
		// console.log([x, this.x_pos, dx])
		this.x_move
		dx = Math.abs(dx)<=this.patrolspeed?dx:this.patrolspeed*(dx/Math.abs(dx))
		var col = Math.floor(this.y_pos/50)
		var row = Math.floor(this.x_pos/50)
		var row_move = Math.floor((this.x_pos+dx)/50)
		var col_move = Math.floor((this.y_pos+dy)/50)
		var col_c = Math.ceil(this.y_pos/50)
		var row_c = Math.ceil(this.x_pos/50)
		var row_move_c = Math.ceil((this.x_pos+dx)/50)
		var col_move_c = Math.ceil((this.y_pos+dy)/50)
		if(dx>0){
			if(currentLevelA[col][row_move_c].collision!=true
			&& currentLevelA[col_c][row_move_c].collision!=true){
				
				// this.x_pos += dx
				
			}else{
				// console.log('collision!')
				dx = ((row_c)*50)-this.x_pos
			}
			this.orientation.push('right')
		}else{
			if(currentLevelA[col][row_move].collision!=true
			&& currentLevelA[col_c][row_move].collision!=true){
				// this.x_pos += dx
			}else{
				dx = (row_move_c)*50-this.x_pos
			}
			this.orientation.push('left')
		}
		this.walkToYAxis(y, dx)
	}
	
	this.walkToYAxis = function(y, dx){
		var dy = y-this.y_pos
		this.y_move
		dy = Math.abs(dy)<=this.patrolspeed?dy:this.patrolspeed*(dy/Math.abs(dy))
		// console.log([y, this.y_pos, dy])
		var col = Math.floor(this.y_pos/50)
		var row = Math.floor(this.x_pos/50)
		var row_move = Math.floor((this.x_pos+dx)/50)
		var col_move = Math.floor((this.y_pos+dy)/50)
		var col_c = Math.ceil(this.y_pos/50)
		var row_c = Math.ceil(this.x_pos/50)
		var row_move_c = Math.ceil((this.x_pos+dx)/50)
		var col_move_c = Math.ceil((this.y_pos+dy)/50)
		if(dy>0){
			// console.log('downward')
			if(currentLevelA[col_move_c][row].collision!=true
			&& currentLevelA[col_move_c][row_c].collision!=true){
				
				// this.y_pos += dy
				
			}else{
				dy = ((col_move)*50)-this.y_pos
			}
			this.orientation.push('down')
		}else{
			if(currentLevelA[col_move][row].collision!=true
			&& currentLevelA[col_move][row_c].collision!=true){
				// this.y_pos += dy
			}else{
				dy = (col_move_c)*50-this.y_pos
			}
			this.orientation.push('up')
			
		}
		this.lineCorrections(dx, dy)
	}
	
	this.walkTo = function(coords){
		this.walkToXAxis(coords[0], coords[1])
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
	
	this.findAngle = function(o, a){
		return Math.atan(o/a)
	}
	
	this.checkIfCollision = function(x, y){
		var node = currentLevelA[y][x]
		return node==0?false:node.collision
	}
	
	this.determineMaxChaseSight = function(){
		var a = playerA[0].x_pos-this.x_pos
		var flip = Math.abs(a)/a
		var adjacent = playerA[0].x_pos-this.x_pos*flip
		var opposite = playerA[0].y_pos-this.y_pos
		var angle = this.findAngle(opposite, adjacent)
		var c = Math.cos(angle)
		var s = Math.sin(angle)
		var hypotenuse = opposite/s
		var ch = 0
		var ca = 0
		var co = 0
		var maxR = hypotenuse<=250?hypotenuse:250
		if(Math.abs(adjacent)>Math.abs(opposite)){
			var factor = 50/adjacent
			var unit = {
				a: 50,
				o: opposite*factor,
				h: hypotenuse*factor
			}
			while(ch<maxR){
				ca += unit.a
				co += unit.o
				ch += unit.h
				var y = Math.floor((co+this.y_pos)/50)
				var x = Math.floor(((ca*flip)+this.x_pos)/50)
				if(this.checkIfCollision(x, y)){
					return ch
				}
			}
		}
		if(Math.abs(adjacent)<Math.abs(opposite)){
			var factor = 50/opposite
			var unit = {
				a: adjacent*factor,
				o: 50,
				h: hypotenuse*factor
			}
			while(ch<maxR){
				ca += unit.a
				co += unit.o
				ch += unit.h
				var y = Math.floor((co+this.y_pos)/50)
				var x = Math.floor(((ca*flip)+this.x_pos)/50)			
				if(this.checkIfCollision(x, y)){
					return ch
				}
			}
			if(ch>maxR){
				return maxR
			}
		}
		return 250
	}
	
	this.WithinChaseSight = function(range){
		var adjacent = playerA[0].x_pos-this.x_pos
		var opposite = playerA[0].y_pos-this.y_pos
		var angle = this.findAngle(opposite, adjacent)
		var c = Math.cos(angle)
		var s = Math.sin(angle)
		var MaxA = c*range
		var MaxO = s*range
		return (MaxA>=Math.abs(adjacent))
	}
	
	this.chase = function(){
		var range = this.determineMaxChaseSight()
		console.log(this.intermediate)
		if(!this.intermediate.length){
			if(this.WithinChaseSight(Math.abs(range))){
				this.walkTo([playerA[0].x_pos, playerA[0].y_pos])
				this.lastFoundPos = [playerA[0].x_pos, playerA[0].y_pos]
			}else{
				this.walkTo(this.lastFoundPos)
			}
		}else{
			console.log([this.intermediate, [this.x_pos, this.y_pos]])
			if(this.x_pos==this.intermediate[0]&&this.y_pos==this.intermediate[1]){
				console.log('clear!')
				this.intermediate = []
				console.log(this.lastFoundPos)
				var x_mod = 0
				var y_mod = 0
				if(this.axis==1){
					if(this.lastFoundPos[0]<this.x_pos){
						x_mod=-3
					}else{
						x_mod=3
					}
				}else if(this.axis==-1){
					if(this.lastFoundPos[1]<this.y_pos){
						y_mod=-3
					}else{
						console.log('er 3')
						y_mod=3
					}
				}
				this.axis=0
				this.walkTo([this.lastFoundPos[0]+x_mod, this.lastFoundPos[1]+y_mod])
			}else{
				this.walkTo(this.intermediate)
			}
		}
	}
	
	this.withinPatrolSightRight = function(i, range){
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
					var x = Math.floor(this.x_pos/50+c)
					var y = Math.floor(this.y_pos/50+i)
					if(x>=40){
						x=39
					}
					this.pos = [y<0?0:y, x<0?0:x]
					if(currentLevelA[this.pos[0]][this.pos[1]]!=0){
						if(currentLevelA[this.pos[0]][this.pos[1]].content == 'wall'){
							range = currentLevelA[this.pos[0]][this.pos[1]].x_pos-this.x_pos;
							break;	
						}
					}
				}
				if(this.withinPatrolSightRight(i, range)){
					this.found = true
					this.lastFoundPos = [playerA[0].x_pos, playerA[0].y_pos] 
					return true
				}
			}
		}
		// if(this.orientation[0] == 'left'){
			// for(var i=-1;i<=1;i++){
				// var range = -250
				// for(var c=1; c<=5; c++){
					// var x = Math.floor(this.x_pos/50-c)
					// var y = Math.floor(this.y_pos/50+i)
					// this.pos = [y, x]
					// console.log([i, c])
					// if(currentLevelA[this.pos[0]][this.pos[1]]!=0){
						
						// console.log(this.pos)
						// if(currentLevelA[this.pos[0]][this.pos[1]].collision){
							// // console.log('short range')
							// range = currentLevelA[this.pos[0]][this.pos[1]].x_pos-this.x_pos;

							// break;	
						// }
					// }
				// }
				// // here
			// }
		// }
		return false
	}
	
	this.run = function(){
		this.detect()
		this.orientation = []
		if(this.found){
			this.chase()
		}else{
			this.patrol()
		}
	}	
}

Defense.prototype = new Particle()