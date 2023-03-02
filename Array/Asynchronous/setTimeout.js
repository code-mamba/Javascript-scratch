console.log('started...')
function greet(name){
	console.log(`hello ${name}`)
}
 const Timeout = setTimeout(greet,4000,'dhanush')
 


const intervalid = setInterval(greet,2000,'santhosh')
clearInterval(intervalid)


// call back 

function greet(name){
	console.log(`Hello ${name}`)
}
function greetDhanush(){
	name = 'dhanush'
	greet(name)
}

greetDhanush()

// Higher order function
function greet(name){
	console.log(`Hello${name}`)
}

function higherOrderFunction(callback){
	name = 'danny'
	callback(name)
}

higherOrderFunction(greet)