const getTodos =()=> {
	return new Promise((resolve, reject)=>{
		const request = new XMLHttpRequest
		request.open("GET", "https://jsonplaceholder.typicode.com/todoss/")
		request.addEventListener("readystatechange",()=>{
			if(request.readyState === 4 && request.status == 200){
				// console.log(request.responseText)
				resolve(request.responseText)
			}
			else if(request.readyState === 4){
				// console.log("Unable to fetch")
				reject(request.status)
			}
		})
	request.send()

	})


}
getTodos().then((resolve)=>{console.log('promise resolved',resolve)}).catch((err)=>{console.log("unable to fetch",err)})