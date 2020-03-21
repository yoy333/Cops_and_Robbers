var w = function (){return new Wall()}
var f = function (){return new Furniture()}
var g = new Guard([[550 ,50],[150 ,50]])
var j = new Gem()
var levelA = [
    [	
		[w(),0  ,0  ,w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w()],
        [w(),0  ,0  ,g  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,w()],
        [w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,w()],
        [w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,w()],
        [w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,f(),0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,w()],
        [w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w()],
        [w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w()],
        [w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w()],
        [w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w()],
        [w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w()],
        [w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w()],
		[w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,w()],
        [w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w(),w(),w(),w(),w(),w(),w()],
        [w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,w()],
		[w(),w(),w(),w(),w(),w(),w(),w(),w(),0  ,0  ,0  ,w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),0  ,0  ,0  ,w(),w(),w(),w(),w(),w(),w(),w(),0  ,0  ,0  ,0  ,0  ,w()],
        [w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,w()],
        [w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,j  ,0  ,0  ,w()],
        [w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w()],
        [w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w(),0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,w()],
		[w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w(),w()],
    ]
]