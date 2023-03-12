const getTodos = async() =>{
const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
const data = response.json()
console.log(data)
}

getTodos()
console.log(1)
console.log(2)

const getTodos1 = async()=>{
	const res1 = await fetch("Todos/Todo1.json")
	const data = res1.json()
	console.log(data)
}
getTodos1()
console.log(3)
console.log(4)