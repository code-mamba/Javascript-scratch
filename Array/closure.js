function init(){
	var name = "Mozilla";
	function displayName(){
		console.log(name)
	}
	displayName()
}
init()

function numberGenerator(){
	var num = 1
	function checkNumber(){
		console.log(num)
	}
	num++
	return checkNumber
}
var number = numberGenerator()
number()

const counter = (function(){
	let privateCounter = 0

	function changeBy(val){
		privateCounter+=val
	}
	return{
		increment(){
			changeBy(1)
		},
		decrement(){
			changeBy(-1)
		},
		value(){
			return privateCounter
		}
	}



})()
console.log(counter.value())
counter.increment()
counter.increment()
counter.increment()
console.log(counter.value())
counter.decrement()
console.log(counter.value())
