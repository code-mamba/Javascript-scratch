const getTodos =(resource)=>{

	return new Promise((resolve, reject)=>{
		const request = new XMLHttpRequest();
		request.open('GET',resource)
		request.addEventListener("readystatechange",()=>{
			if(request.readyState === 4 && request.status === 200){
				resolve(request.responseText)
				
			}
			else if(request.readyState === 4){
				reject(request.status)
				
			}
		})
	
		request.send()
	})

}
getTodos("Todos/Todo1.json").then((resolve)=>{console.log("resolved1",resolve)
return getTodos("Todos/Todo2.json").then((resolve)=>{console.log("resolved2",resolve)
return getTodos("Todos/Todo3.json").then((resolve)=>{console.log("resolved3",resolve)})
})
}).catch((err)=>{console.log(err)})