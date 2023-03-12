const getTodo = (callback)=>{
	const request = new XMLHttpRequest()
	request.addEventListener("readystatechange",()=>{
		if(request.readyState === 4 && request.status === 200){
			callback(undefined, request.responseText)
			console.log(request.status)
		}
		else if(request.readyState === 4){
			callback("could not fetch",undefined )
			console.log(request.status)
		}
	})
	request.open("GET","https://jsonplaceholder.typicode.com/todoss/" )
	request.send()
}

console.log(1)
console.log(2)

getTodo((err, data)=>{
	console.log("call back fired")
	console.log(err,data)
	if(err){
		console.log(err)
	}
	else{
		console.log(data)
	}
})

console.log(3)
console.log(4)
