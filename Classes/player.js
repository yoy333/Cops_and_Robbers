var Player = function(x,y){
	this.x_pos = x
	this.y_pos = y
	this.playerSpeed = 4
	this.hasGem = false
	this.hasWon = false
	this.dx
	this.dy
	this.stamina = 360

	this.hiding = false
	var hidden = 'txt'
  
	this.camera_pos= {
		x:0,
		y:0
	}
	playerX = x
	playerY = y

	this.spawn = function(){
		ctx.fillStyle = "#FFFFFF"
		ctx.fillRect(this.x_pos, this.y_pos, 50, 50)
	}

	this.sprint = function(){
		if(keys.shift && this.stamina>0){
			this.playerSpeed = 7
			this.stamina-=2
		}else{
			this.playerSpeed = 4
			if(this.stamina<360&&keys.shift==false){
				this.stamina++
			}
		}
	}

	this.move = function(){
		if(keys.w){
			this.y_pos -= this.playerSpeed
			playerY -= this.playerSpeed
		}
		if(keys.s){
			this.y_pos += this.playerSpeed
			playerY += this.playerSpeed
		}
		if(keys.a){
			this.x_pos -= this.playerSpeed
			playerX -= this.playerSpeed
		}
		if(keys.d){
			this.x_pos += this.playerSpeed
			playerX += this.playerSpeed
		}
	}

    this.walk = function(distance, theta) {
        this.dx = Math.round(Math.cos(theta) * distance)
        this.dy = Math.round(Math.sin(theta) * distance)
		var col = Math.floor(this.y_pos/50)
		var row = Math.floor(this.x_pos/50)
		var row_move = Math.floor((this.x_pos+this.dx)/50)
		var col_move = Math.floor((this.y_pos+this.dy)/50)
		var col_c = Math.ceil(this.y_pos/50)
		var row_c = Math.ceil(this.x_pos/50)
		var row_move_c = Math.ceil((this.x_pos+this.dx)/50)
		var col_move_c = Math.ceil((this.y_pos+this.dy)/50)
		if(col_move_c<=0||row_move_c<=0||col_move>=19||row_move>=39){
			if(this.hasGem){
				alert('you win')
				this.hasWon=true
			}
		}else{
			if (currentLevelA[col][row_move].collision!=true && 
			currentLevelA[col_c][row_move_c].collision!=true &&
			currentLevelA[col_c][row_move].collision!=true &&
			currentLevelA[col][row_move_c].collision!=true){
				this.x_pos += this.dx;
				if(currentLevelA[col][row_move].content=='gem'){
					this.collect(col, row_move)
				}
				if(currentLevelA[col_c][row_move_c].content=='gem'){
					this.collect(col_c, row_move_c)
				}
				if(currentLevelA[col_c][row_move].content=='gem'){
					this.collect(col_c, row_move)
				}
				if(currentLevelA[col][row_move_c].content=='gem' ){
					this.collect(col, row_move_c)
				}
			}else{
				//where they are going, + -1 if they are going left, and + 1 if they are going right * 50,the size of the nodes
				this.x_pos = (row_move + ((Math.abs(this.dx) / this.dx + 1)/2) - Math.abs(this.dx) / this.dx)*50
			}
		
			if (currentLevelA[col_move][row].collision!=true
			&& currentLevelA[col_move_c][row_c].collision!=true
			&& currentLevelA[col_move_c][row].collision!=true
			&& currentLevelA[col_move][row_c].collision!=true ){
				this.y_pos += this.dy;
				if(currentLevelA[col_move][row].content=='gem'){
					this.collect(row, col_move)
				}
				else if(currentLevelA[col_move_c][row_c].content=='gem'){
					this.collect(row_c, col_move_c)
				}
				else if(currentLevelA[col_move_c][row].content=='gem'){
					this.collect(row, col_move_c)
				}
				else if(currentLevelA[col_move][row_c].content=='gem'){
					this.collect(row_c, col_move)
				}
				 
			}else{
				this.y_pos = (col_move + ((Math.abs(this.dy) / this.dy + 1)/2) - Math.abs(this.dy) / this.dy)*50
			}
		}
	}
	
	this.sidescroll = function(){
		if(this.x_pos-this.camera_pos.x>=800 && this.x_pos<currentLevelA[0].length*50-201){
			this.camera_pos.x += this.playerSpeed
		}
		else if(this.x_pos-this.camera_pos.x<=200 && this.x_pos>200){
			this.camera_pos.x -= this.playerSpeed
		}
		
		if(this.y_pos-this.camera_pos.y>=400 && this.y_pos<currentLevelA.length*50-201){
			this.camera_pos.y += this.playerSpeed
		}
		else if(this.y_pos-this.camera_pos.y<=200 && this.y_pos>200){
			this.camera_pos.y -= this.playerSpeed
		}
	}
	
	this.constant = function(){
		this.sprint();
		// console.log(this.camera_pos)
		//this.move()

		if(this.hiding==false){
			if(keys.d){
				this.walk(this.playerSpeed, 0)
			}
			if(keys.s){
				this.walk(this.playerSpeed, Math.PI/2)
			}
			if(keys.a){
				this.walk(this.playerSpeed, Math.PI)
			}
			if(keys.w){
				this.walk(this.playerSpeed, 3*Math.PI/2)
			}
		}

		//this.collect()
		this.sidescroll()
	}
	
	this.collect = function(a,b){
		this.hasGem = true
		currentLevelA[a][b] = 0
		
	}
	// this.spawn()
}